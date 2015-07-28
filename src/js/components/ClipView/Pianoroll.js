'use strict';

import React, { Component, PropTypes } from 'react';

class Pianoroll extends Component {

  static propTypes = {
    clip : PropTypes.object.isRequired,
  }

  constructor (props) {
    super(props);
  }

  render () {
    const { clip } = this.props;

    const notes = this.midi2notes(clip.midi);

    return (
      <div className="Pianoroll">
        <ul>
          { clip.midi.map((m, i) =>
            <li key={i}>
              {`${m.time / 0x0100} : ${m.data[0]} / ${m.data[1]}`}
            </li>
          ) }
        </ul>
      </div>
    );
  }

  midi2notes (midis) {
    let notes = {};
    midis.forEach(m => {
      const noteNum = m.data[1]
      if (! notes[noteNum]) { notes[noteNum] = []; }
      notes[noteNum].push(m.data);
    });
    return notes;
  }

}


export default Pianoroll;
