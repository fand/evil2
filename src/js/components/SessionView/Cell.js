'use strict';

import React from 'react';

import classnames from 'classnames';

class Cell extends React.Component {

  static propTypes = {
    clipId    : React.PropTypes.string,
    clips     : React.PropTypes.object.isRequired,
    session   : React.PropTypes.object.isRequired,
    columnIdx : React.PropTypes.number.isRequired,
    rowIdx    : React.PropTypes.number.isRequired,
    actions   : React.PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
  }

  isSelected () {
    const { session, rowIdx, columnIdx } = this.props;
    if (!session.currentCell) { return false; }
    if (session.currentCell.rowIdx !== rowIdx) { return false; }
    if (session.currentCell.columnIdx !== columnIdx) { return false; }
    return true;
  }

  render () {
    let clip = this.props.clips[this.props.clipId];
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
