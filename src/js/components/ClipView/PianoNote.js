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
        <div className="PianoNote__Left"
          onMouseDown={::this.onMouseDown}
          onMouseUp={::this.onMouseUp}
          onMouseMove={::this.onMouseMove} />
        <div className="PianoNote__Right" />
      </div>
    );
  }

  onMouseDown (e) {
    if (e.ctrlKey) {
      this.props.actions.addSelectedNote();
    }
    else {
      this.props.actions.selectNote();
    }

    this.props.actions.dragStarted({
      x : e.clientX,
      y : e.clientY,
    });
  }

  onMouseMove (e) {
    this.props.actions.dragMoved({
      x : e.clientX,
      y : e.clientY,
    });
  }

  onMouseUp (e) {
    this.props.actions.dragEnded({
      x : e.clientX,
      y : e.clientY,
    });
  }

}

export default PianoNote;
