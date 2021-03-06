'use strict';

import React, { PropTypes } from 'react';

const NOTE_COLOR = [
  '#FFF', '#000', '#FFF', '#000', '#FFF',
  '#FFF', '#000', '#FFF', '#000', '#FFF',
  '#000', '#FFF', '#FFF',
];

class PianoKey extends React.Component {

  static propTypes = {
    noteNum : PropTypes.number.isRequired,
    height  : PropTypes.number.isRequired,
  };

  render () {
    const { noteNum, height } = this.props;

    const style = {
      background : NOTE_COLOR[noteNum % 12],
      height,
    };

    return (
      <div className="Pianoroll__Key" style={style} />
    );
  }

}

export default PianoKey;
