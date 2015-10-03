'use strict';

import React, { PropTypes } from 'react';

class PianoNote extends React.Component {

  static propTypes = {
    note       : PropTypes.object.isRequired,
    isSelected : PropTypes.bool.isRequired,
    beatWidth  : PropTypes.number.isRequired,
    height     : PropTypes.number.isRequired,
    state      : PropTypes.object.isRequired,
    actions    : PropTypes.object.isRequired,

    dx : PropTypes.number.isRequired,
    dy : PropTypes.number.isRequired,
    dw : PropTypes.number.isRequired,
  }

  render () {
    const { note, beatWidth, height, isSelected } = this.props;
    const { dx, dy, dw } = this.props.state.pianoroll;

    const style = {
      top    : 1280 - note.on.data[1] * 10,
      left   : (note.on.time / 0x100) * beatWidth,
      width  : (note.off.time - note.on.time) / 0x100 * beatWidth,
      height,
    };

    if (isSelected) {
      style.top   += dy;
      style.left  += dx;
      style.width += dw;
    }

    const cx = `PianoNote ${isSelected ? 'selected' : ''}`;

    return (
      <div className={cx} style={style}>
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
      if (this.props.isSelected) {
        this.props.actions.pianoroll.deselectNote(this.props.note.uuid);
      }
      else {
        this.props.actions.pianoroll.selectNote(this.props.note.uuid);
      }
    }
    else {
      if (! this.props.isSelected) {
        this.props.actions.pianoroll.deselectAllNotes();
        this.props.actions.pianoroll.selectNote(this.props.note.uuid);
      }
    }
  }

  onMouseDownLeftHandle (e) {
    this.selectNote(e);
    this.props.actions.pianoroll.startMovingNoteOn();
    this.props.actions.pianoroll.dragStarted({
      x : e.clientX,
      y : e.clientY,
    });
  }

  onMouseDownRightHandle (e) {
    this.selectNote(e);
    this.props.actions.pianoroll.startMovingNoteOff();
    this.props.actions.pianoroll.dragStarted({
      x : e.clientX,
      y : e.clientY,
    });
  }

  onMouseDownCenter (e) {
    this.selectNote(e);
    this.props.actions.pianoroll.startMovingNote();
    this.props.actions.pianoroll.dragStarted({
      x : e.clientX,
      y : e.clientY,
    });
  }

}

export default PianoNote;
