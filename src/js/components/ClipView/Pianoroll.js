'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'redux-react';

import PianoNote from './PianoNote';

@connect(state => {
  const { view } = state.root;
  return { ...view.clipView };
})
class Pianoroll extends Component {

  static propTypes = {
    clip : PropTypes.object.isRequired,
  }

  constructor (props) {
    super(props);
  }

  render () {
    const { clip, notes, zoomX, zoomY, bars, beats, beatsPerBar } = this.props;

    const totalBars = bars + beats / beatsPerBar;

    const notesStyle = {
      width: `${totalBars * zoomX * 100}%`
    };

    return (
      <div className="Pianoroll">
        <div className="Pianoroll__NotesWrapper">
          <div className="Pianoroll__Notes" style={notesStyle}>
            { notes.map((n, i) => this.renderNote(n, i)) }
          </div>
        </div>
      </div>
    );
  }

  renderNote (note, i) {
    return <PianoNote note={note} key={i} />;
  }

}


export default Pianoroll;
