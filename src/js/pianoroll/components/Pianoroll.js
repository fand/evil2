'use strict';

import uuid from 'uuid';
import _ from 'lodash';

import { connect } from 'react-redux';
import React, { PropTypes } from 'react';

import PianoKey from './PianoKey';
import PianoNote from './PianoNote';
import CONST, { DragMode } from '../CONST';

// const isNoteOn  = m => (0x90 <= m && m < 0xA0);
// const isNoteOff = m => (0x80 <= m && m < 0x90);
//
// const midiToNotes = function (midi) {
//   const notes = [];
//   const rows  = {};
//
//   midi.forEach((m) => {
//     if (isNoteOn(m.data[0])) {
//       rows[m.data[1]] = m;
//     }
//     if (isNoteOff(m.data[0])) {
//       const n = rows[m.data[1]];
//       const note = {
//         uuid    : uuid.v4(),
//         left    : n.time  / 0x100,
//         width   : (m.time - n.time) / 0x100,
//         noteNum : n.data[1],
//         on      : n,
//         off     : m,
//       };
//
//       notes.push(note);
//       rows[m.data[1]] = undefined;
//     }
//   });
//
//   return notes;
// };

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
    const { dragMode, x, y, selectedNotes } = state.pianoroll;

    const notes = clip.notes;

    if (Math.abs(x) < 20 && Math.abs(y) < 10) {
      actions.pianoroll.dragEnded();
      return;
    }

    const dx = (x / this.state.beatWidth) * 0xFF;
    const dy = -(y / CONST.NOTE_HEIGHT);

    if (dragMode === DragMode.NOTE_ON) {
      notes.filter(n => selectedNotes[n.uuid]).forEach((note) => {
        const newOn = {
          ...note.on,
          time : note.on.time + dx,
        };

        this.props.actions.clip.updateClipMidi({
          clipId  : this.props.clip.uuid,
          midiId  : note.on.uuid,
          newMidi : newOn,
        });
        this.props.actions.updateNote({
          ...note,
          left  : newOn.time / 0x100,
          width : (note.off.time - newOn.time) / 0x100,
          on    : newOn,
        });
      });
    }
    if (dragMode === DragMode.NOTE_OFF) {
      notes.filter(n => selectedNotes[n.uuid]).forEach((note) => {
        const newOff = {
          ...note.off,
          time : note.off.time + dx,
        };

        this.props.actions.clip.updateClipMidi({
          clipId  : this.props.clip.uuid,
          midiId  : note.off.uuid,
          newMidi : newOff,
        });
        this.props.actions.clip.updateNote({
          ...note,
          width : (newOff.time - note.on.time) / 0x100,
          off   : newOff,
        });
      });
    }
    if (dragMode === DragMode.NOTE) {
      notes.filter(n => selectedNotes[n.uuid]).forEach((note) => {
        const { on, off } = note;
        const newOn = {
          uuid : on.uuid,
          time : note.on.time + dx,
          data : [on.data[0], on.data[1] + dy, on.data[2]],
        };
        const newOff = {
          uuid : off.uuid,
          time : note.off.time + dx,
          data : [off.data[0], off.data[1] + dy, off.data[2]],
        };

        this.props.actions.clip.updateClipMidi({
          clipId  : this.props.clip.uuid,
          midiId  : on.uuid,
          newMidi : newOn,
        });
        this.props.actions.clip.updateClipMidi({
          clipId  : this.props.clip.uuid,
          midiId  : note.off.uuid,
          newMidi : newOff,
        });
        this.props.actions.clip.updateNote({
          uuid    : note.uuid,
          left    : newOn.time / 0x100,
          width   : (newOff.time - newOn.time) / 0x100,
          noteNum : newOn.data[1],
          on      : newOn,
          off     : newOff,
        });
      });
    }

    this.props.actions.dragEnded();
  }

  renderNote (note, i) {
    const { state, actions } = this.props;
    const { x, y, w, zoomY } = state.pianoroll;

    const height = zoomY * 10;
    const isSelected = state.selection.selectedNoteIds.indexOf(note.uuid) !== -1;

    return (
      <PianoNote
        note={note}
        isSelected={isSelected}
        x={x}
        y={y}
        w={w}
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
