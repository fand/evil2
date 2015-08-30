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
    const { note, beatWidth, height, selectedNotes } = this.props;

    const style = {
      top      : 1280 - note.noteNum * 10,
      left     : note.left * beatWidth,
      width    : note.width * beatWidth,
      height   : height,
    };

    if (this.props.isSelected) {
      style.top  += this.props.y;
      style.left += this.props.x;
    }

    const cx = `PianoNote ${this.props.isSelected ? 'selected' : ''}`;

    return (
      <div className={cx} style={style}
        onMouseDown={::this.selectNote}>
        <div className="PianoNote__Left"
          onMouseDown={::this.onMouseDownLeftHandle} />
        <div className="PianoNote__Right"
          onMouseDown={::this.onMouseDownRightHandle} />
        <div className="PianoNote__Center"
          onMouseDown={::this.onMouseDownCenter} />
      </div>
    );
  }

  selectNote (e) {
    if (e.shiftKey) {
      this.props.actions.addSelectedNote(this.props.note);
    }
    else if (!this.props.isSelected) {
      this.props.actions.selectNote(this.props.note);
    }
  }

  onMouseDownLeftHandle (e) {
    this.props.actions.startMovingNoteOn();
    this.props.actions.dragStarted({
      x : e.clientX,
      y : e.clientY,
    });
  }

  onMouseDownRightHandle (e) {
    this.props.actions.startMovingNoteOff();
    this.props.actions.dragStarted({
      x : e.clientX,
      y : e.clientY,
    });
  }

  onMouseDownCenter (e) {
    this.props.actions.startMovingNote();
    this.props.actions.dragStarted({
      x : e.clientX,
      y : e.clientY,
    });
  }

}

export default PianoNote;
