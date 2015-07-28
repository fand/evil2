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

    return (
      <div className="Pianoroll">
        <ul>
          { clip.midi.map(m => <li>{`${m.time / 0xFF} : ${m.data[0]} / ${m.data[1]}`}</li>) }
        </ul>
      </div>
    );
  }

}


export default Pianoroll;
