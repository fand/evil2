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
    const { note, beatWidth } = this.props;

    const style = {
      position : 'absolute',
      top      : 1280 - note.noteNum * 10,
      left     : note.left * beatWidth,
      width    : note.width * beatWidth,
      height   : 10,
    };

    return (
      <div className="Pianoroll__Note" style={style} />
    );
  }

}

export default PianoNote;
