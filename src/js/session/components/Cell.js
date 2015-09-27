'use strict';

import React from 'react';

import classnames from 'classnames';

class Cell extends React.Component {

  static propTypes = {
    clip      : React.PropTypes.object,
    columnIdx : React.PropTypes.number.isRequired,
    rowIdx    : React.PropTypes.number.isRequired,
    id        : React.PropTypes.string.isRequired,  // not universally-unique
    actions   : React.PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
  }

  isSelected () {
    const { selection, clip, state, id } = this.props;
    if (state.selection.selectedCellIds.indexOf(id) !== -1) {
      return true;
    }
    return false;
  }

  render () {
    const { clip } = this.props;
    let clipName = clip ? clip.name : '';

    const className = 'SessionView__Cell' + (this.isSelected() ? '--selected' : '');

    return (
      <div className={className} onClick={::this.onClick}>
        <span className="SessionView__Cell__PlayButton">▲</span>
        {clipName}
      </div>
    );
  }

  onClick (e) {
    const { clip, id, actions } = this.props;

    if (! e.shiftKey) {
      actions.selection.deselectAllCells(id);
      actions.selection.deselectAllClips(clip.uuid);
    }

    actions.selection.selectCell(id);

    if (clip) {
      actions.selection.selectClip(clip.uuid);
      actions.selection.focusClip(clip.uuid);
    }
  }

}

export default Cell;
