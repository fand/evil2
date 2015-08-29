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
      <div className="PianoNote" style={style}
        onMouseDown={::this.selectNote}>
        <div className="PianoNote__Left"
          onMouseDown={::this.onMouseDown} />
        <div className="PianoNote__Right"
          onMouseDown={::this.onMouseDown} />
      </div>
    );
  }

  selectNote (e) {
    if (e.ctrlKey) {
      this.props.actions.addSelectedNote();
    }
    else {
      this.props.actions.selectNote(this.props.note);
    }
  }

  onMouseDown (e) {
    this.props.actions.dragStarted({
      x : e.clientX,
      y : e.clientY,
    });
  }

}

export default PianoNote;
