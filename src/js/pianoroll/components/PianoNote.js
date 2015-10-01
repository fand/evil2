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

    // TODO: Calculate these props in this component
    // x : PropTypes.number.isRequired,
    // y : PropTypes.number.isRequired,
    // w : PropTypes.number.isRequired,
  }

  render () {
    const { note, beatWidth, height, isSelected } = this.props;
    const { x, y, w } = this.props.state.pianoroll;

    const style = {
      top    : 1280 - note.noteNum * 10,
      left   : note.left * beatWidth,
      width  : note.width * beatWidth,
      height : height,
    };

    if (isSelected) {
      style.top   += y;
      style.left  += x;
      style.width += w;
    }

    const cx = `PianoNote ${isSelected ? 'selected' : ''}`;

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
      this.props.actions.pianoroll.addSelectedNote(this.props.note);
    }
    else if (!this.props.isSelected) {
      this.props.actions.pianoroll.selectNote(this.props.note);
    }
  }

  onMouseDownLeftHandle (e) {
    this.props.actions.pianoroll.startMovingNoteOn();
    this.props.actions.pianoroll.dragStarted({
      x : e.clientX,
      y : e.clientY,
    });
  }

  onMouseDownRightHandle (e) {
    this.props.actions.pianoroll.startMovingNoteOff();
    this.props.actions.pianoroll.dragStarted({
      x : e.clientX,
      y : e.clientY,
    });
  }

  onMouseDownCenter (e) {
    this.props.actions.pianoroll.startMovingNote();
    this.props.actions.pianoroll.dragStarted({
      x : e.clientX,
      y : e.clientY,
    });
  }

}

export default PianoNote;
