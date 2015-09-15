'use strict';

import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as PianorollActions from '../actions/PianorollActions';

import React, { Component, PropTypes } from 'react';

import PianoKey from './PianoKey';
import PianoNote from './PianoNote';

const NOTE_HEIGHT = 10;


@connect(state => {
  const scene = state.song.sessionData.currentScene
  return {
    ...state.view.pianoroll,
    scene,
  };
}, dispatch => {
  return { actions : bindActionCreators(PianorollActions, dispatch) };
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
    if (!this.props.isDragging) { return; }

    const { notes, selectedNotes, dragMode, x, y } = this.props;

    if (Math.abs(x) < 20 && Math.abs(y) < 10) {
      this.props.actions.dragEnded();
      return;
    }

    const dx = (x / this.state.beatWidth) * 0xFF;
    const dy = - y / NOTE_HEIGHT;

    if (dragMode === 'NOTE_ON') {
      notes.filter(n => selectedNotes[n.uuid]).forEach((note) => {
        const newOn = {
          ...note.on,
          time : note.on.time + dx,
        };
        this.props.clipActions.updateClipMidi({
          clipId  : this.props.clip.uuid,
          midiId  : note.on.uuid,
          newMidi : newOn,
        });
        this.props.actions.updateNote({
          ...note,
          left  : newMidi.time / 0x100,
          width : (note.off.time - newMidi.time) / 0x100,
          onn   : newOn,
        });
      });
    }
    if (dragMode === 'NOTE_OFF') {
      notes.filter(n => selectedNotes[n.uuid]).forEach((note) => {
        const newOff = {
          ...note.off,
          time : note.off.time + dx,
        };

        this.props.clipActions.updateClipMidi({
          clipId  : this.props.clip.uuid,
          midiId  : note.off.uuid,
          newMidi : newOff,
        });
        this.props.actions.updateNote({
          ...note,
          width : (newMidi.time - note.on.time) / 0x100,
          off   : newOff,
        });
      });
    }
    if (dragMode === 'NOTE') {
      notes.filter(n => selectedNotes[n.uuid]).forEach((note) => {
        const { on, off } = note;
        const newOn = {
          uuid : on.uuid,
          time : note.on.time + dx,
          data : [on.data[0], on.data[1] + dy, on.data[2]],
        };
        const newOff = {
          uuid : off.uuid,
          time : note.off.time + dx,
          data : [off.data[0], off.data[1] + dy, off.data[2]],
        }
        this.props.clipActions.updateClipMidi({
          clipId  : this.props.clip.uuid,
          midiId  : on.uuid,
          newMidi : newOn,
        });
        this.props.clipActions.updateClipMidi({
          clipId  : this.props.clip.uuid,
          midiId  : note.off.uuid,
          newMidi : newOff,
        });
        this.props.actions.updateNote({
          uuid    : note.uuid,
          left    : newOn.time / 0x100,
          width   : (newOff.time - newOn.time) / 0x100,
          noteNum : newOn.data[1],
          on      : newOn,
          off     : newOff,
        });
      });
    }

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
        w={this.props.w}
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
