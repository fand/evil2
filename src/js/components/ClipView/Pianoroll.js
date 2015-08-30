'use strict';

import _ from 'lodash';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PianoKey from './PianoKey';
import PianoNote from './PianoNote';

@connect(state => {
  const scene = state.song.sessionData.currentScene
  return {
    ...state.view.pianoroll,
    scene,
  };
})
class Pianoroll extends Component {

  static propTypes = {
    clip : PropTypes.object.isRequired,
  }

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.onResize();
    window.addEventListener('resize', ::this.onResize);
    window.addEventListener('mousemove', ::this.onMouseMove);
    window.addEventListener('mouseup', ::this.onMouseUp);
  }

  componentWillUnmount () {
    window.removeListener('resize', ::this.onResize);
    window.removeListener('mousemove', ::this.onMouseMove);
    window.removeListener('mouseup', ::this.onMouseUp);
  }

  componentWillReceiveProps (nextProps) {
    // console.log(nextProps);
  }

  onResize () {
    const wrapperWidth = this.refs.wrapper.getDOMNode().clientWidth;
    this.setState({
      wrapperWidth : wrapperWidth,
      beatWidth    : wrapperWidth / this.props.scene.beatsPerBar,
    });
  }

  onMouseMove (e) {
    if (this.props.isDragging) {
      this.props.actions.dragMoved({
        x : e.clientX,
        y : e.clientY,
      });
    }
  }

  onMouseUp (e) {
    this.props.actions.dragEnded();
  }

  render () {
    const { scene, clip, notes, zoomX, zoomY } = this.props;
    const { beatsPerBar } = scene;

    // beats to show in pianoroll by default??????
    const beats = clip.length[0] * beatsPerBar + clip.length[1] + (clip.length[2] ? 1 : 0);
    const totalBars = beats / beatsPerBar + (beats % beatsPerBar ? 1 : 0);

    const notesStyle = {
      width: `${totalBars * zoomX * 100}%`,
      height : zoomY * 1280,
    };

    return (
      <div className="Pianoroll">
        {this.renderKeys()}
        <div className="Pianoroll__NotesWrapper" ref="wrapper">
          <div className="Pianoroll__Notes" style={notesStyle}>
            { notes.map((n, i) => this.renderNote(n, i)) }
          </div>
        </div>
      </div>
    );
  }

  renderNote (note, i) {
    const height = this.props.zoomY * 10;
    const isSelected = this.props.selectedNotes[note.uuid];

    return (
      <PianoNote
        note={note}
        isSelected={isSelected}
        x={this.props.x}
        y={this.props.y}
        key={i}
        beatWidth={this.state.beatWidth}
        height={height}
        actions={this.props.actions} />
    );
  }

  renderKeys () {
    const height = this.props.zoomY * 10;
    return (
      <div className="Pianoroll__Keys">
        {_.range(128).map(i => <PianoKey key={i} noteNum={128 - i} height={height} />)}
      </div>
    );
  }

}


export default Pianoroll;
