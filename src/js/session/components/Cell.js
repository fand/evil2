'use strict';

import React from 'react';

import classnames from 'classnames';

class Cell extends React.Component {

  static propTypes = {
    clip      : React.PropTypes.object.isRequired,
    columnIdx : React.PropTypes.number.isRequired,
    rowIdx    : React.PropTypes.number.isRequired,
    actions   : React.PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
  }

  isSelected () {
    const { selection, clip, state } = this.props;
    if (!clip) { return false; }
    if (state.selection.selectedClipIds.indexOf(clip.uuid) !== -1) {
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

  onClick () {
    if (!this.props.clipId) { return; }
    this.props.actions.selectClip(this.props.clipId);
    this.props.actions.selectScene(this.props.columnIdx);
    this.props.actions.selectCell({
      rowIdx    : this.props.rowIdx,
      columnIdx : this.props.columnIdx
    });
  }

}

export default Cell;
