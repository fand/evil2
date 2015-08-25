'use strict';

import React, { Component, PropTypes } from 'react';

class PianoNote extends Component {

  static propTypes = {
    note : PropTypes.object.isRequired,
  }

  constructor (props) {
    super(props);
  }

  render () {
    const { note, beatWidth, height } = this.props;

    const style = {
      top      : 1280 - note.noteNum * 10,
      left     : note.left * beatWidth,
      width    : note.width * beatWidth,
      height   : height,
    };

    return (
      <div className="PianoNote" style={style}>
        <div className="PianoNote__Left" />
        <div className="PianoNote__Right" />
      </div>
    );
  }

}

export default PianoNote;
