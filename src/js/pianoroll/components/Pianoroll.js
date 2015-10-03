'use strict';

import _ from 'lodash';

import { connect } from 'react-redux';
import React, { PropTypes } from 'react';

import PianoKey from './PianoKey';
import PianoNote from './PianoNote';
import CONST, { DragMode } from '../CONST';

@connect((state) => {
  const focusedSceneId = state.selection.focusedSceneId;
  const scene = (focusedSceneId) ? state.scene.entities.scenes[focusedSceneId] : null;

  return { scene, ...state.pianoroll };
})
class Pianoroll extends React.Component {

  static propTypes = {
    clip    : PropTypes.object.isRequired,
    scene   : PropTypes.object.isRequired,
    state   : PropTypes.object.isRequired,
    actions : PropTypes.object.isRequired,
  }

  constructor () {
    super();
    this.state = {
      wrapperWidth : 0,
      beatWidth    : 0,
    };
  }

  componentDidMount () {
    this.onResize();
    window.addEventListener('resize',    ::this.onResize);
    window.addEventListener('mousemove', ::this.onMouseMove);
    window.addEventListener('mouseup',   ::this.onMouseUp);
  }

  componentWillUnmount () {
    window.removeListener('resize',    ::this.onResize);
    window.removeListener('mousemove', ::this.onMouseMove);
    window.removeListener('mouseup',   ::this.onMouseUp);
  }

  onResize () {
    const wrapperWidth = this.refs.wrapper.getDOMNode().clientWidth;

    this.setState({
      wrapperWidth,
      beatWidth : wrapperWidth / this.props.scene.beatsPerBar,
    });
  }

  onMouseMove (e) {
    if (this.props.state.pianoroll.isDragging) {
      this.props.actions.pianoroll.dragMoved({
        x : e.clientX,
        y : e.clientY,
      });
    }
  }

  onMouseUp () {
    if (!this.props.state.pianoroll.isDragging) { return; }

    const { clip, state, actions } = this.props;
    const { dragMode, dx, dy, dw, selectedNotes } = state.pianoroll;

    const notes = clip.noteIds.map(id => state.clip.entities.notes[id]);

    if (Math.abs(dx) < 20 && Math.abs(dy) < 10 && Math.abs(dw) < 20) {
      actions.pianoroll.dragEnded();
      return;
    }

    const dx_note = (dx / this.state.beatWidth) * 0xFF;
    const dy_note = -(dy / CONST.NOTE_HEIGHT);
    const dw_note = (dw / this.state.beatWidth) * 0xFF;

    if (dragMode === DragMode.NOTE_ON) {
      notes.filter(n => selectedNotes[n.uuid]).forEach((note) => {
        const newOn = {
          ...note.on,
          time : note.on.time + dx_note,
        };

        this.props.actions.clip.updateNote({
          ...note,
          on : newOn,
        });
      });
    }
    if (dragMode === DragMode.NOTE_OFF) {
      notes.filter(n => selectedNotes[n.uuid]).forEach((note) => {
        const newOff = {
          ...note.off,
          time : note.off.time + dw_note,
        };

        this.props.actions.clip.updateNote({
          ...note,
          off : newOff,
        });
      });
    }
    if (dragMode === DragMode.NOTE) {
      notes.filter(n => selectedNotes[n.uuid]).forEach((note) => {
        const { on, off } = note;
        const newOn = {
          uuid : on.uuid,
          time : note.on.time + dx_note,
          data : [on.data[0], on.data[1] + dy_note, on.data[2]],
        };
        const newOff = {
          uuid : off.uuid,
          time : note.off.time + dx_note,
          data : [off.data[0], off.data[1] + dy_note, off.data[2]],
        };

        this.props.actions.clip.updateNote({
          uuid : note.uuid,
          on   : newOn,
          off  : newOff,
        });
      });
    }

    this.props.actions.pianoroll.dragEnded();
  }

  renderNote (note, i) {
    const { state, actions } = this.props;
    const { dx, dy, dw, zoomY } = state.pianoroll;

    const height = zoomY * 10;
    const isSelected = !!state.pianoroll.selectedNotes[note.uuid];

    return (
      <PianoNote
        note={note}
        isSelected={isSelected}
        dx={dx}
        dy={dy}
        dw={dw}
        key={i}
        beatWidth={this.state.beatWidth}
        height={height}
        state={state}
        actions={actions} />
    );
  }

  renderKeys () {
    const height = this.props.state.pianoroll.zoomY * 10;

    return (
      <div className="Pianoroll__Keys">
        {_.range(128).map(i =>
          <PianoKey key={i} noteNum={128 - i} height={height} />
        )}
      </div>
    );
  }

  render () {
    const { scene, clip, state } = this.props;
    const { zoomX, zoomY } = this.props.state.pianoroll;
    const { beatsPerBar } = scene;

    const notes = clip.noteIds.map(noteId => state.clip.entities.notes[noteId]);

    // beats to show in pianoroll by default??????
    const beats = clip.length[0] * beatsPerBar + clip.length[1] + (clip.length[2] ? 1 : 0);
    const totalBars = beats / beatsPerBar + (beats % beatsPerBar ? 1 : 0);

    const notesStyle = {
      width  : `${totalBars * zoomX * 100}%`,
      height : zoomY * 1280,
    };

    return (
      <div className="Pianoroll">
        {this.renderKeys()}
        <div className="Pianoroll__NotesWrapper" ref="wrapper">
          <div className="Pianoroll__Notes" style={notesStyle}>
            {notes.map((n, i) => this.renderNote(n, i))}
          </div>
        </div>
      </div>
    );
  }

}

export default Pianoroll;
