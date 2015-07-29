'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'redux/react';

import PianoNote from './PianoNote';

@connect(state => {
  const { view } =  state.root;
  return { ...view.clipView };
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
  }

  componentWillUnmount () {
    window.removeListener('resize', ::this.onResize);
  }

  onResize () {
    const wrapperWidth = this.refs.wrapper.getDOMNode().clientWidth;
    this.setState({
      wrapperWidth : wrapperWidth,
      beatWidth    : wrapperWidth / this.props.beatsPerBar,
    });
  }

  render () {
    const { clip, notes, zoomX, zoomY, bars, beats, beatsPerBar } = this.props;

    const totalBars = bars + beats / beatsPerBar;

    const notesStyle = {
      width: `${totalBars * zoomX * 100}%`,
      height : zoomY * 1280,
    };

    return (
      <div className="Pianoroll">
        <div className="Pianoroll__NotesWrapper" ref="wrapper">
          <div className="Pianoroll__Notes" style={notesStyle}>
            { notes.map((n, i) => this.renderNote(n, i)) }
          </div>
        </div>
      </div>
    );
  }

  renderNote (note, i) {
    return <PianoNote note={note} key={i} beatWidth={this.state.beatWidth} />;
  }

}


export default Pianoroll;
