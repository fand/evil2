'use strict';

import React from 'react';

class Cell extends React.Component {

  static propTypes = {
    columnIdx : React.PropTypes.number.isRequired,
    rowIdx    : React.PropTypes.number.isRequired,
    actions   : React.PropTypes.object.isRequired
  };

  constructor (props) {
    super(props);
  }

  render () {
    let clip = this.props.clip;
    let clipName = clip ? clip.name : '';
    return (
      <div className="SessionView__Cell" onClick={::this.onClick}>
        <span className="SessionView__Cell__PlayButton">▲</span>
        {clipName}
      </div>
    );
  }

  onClick () {
    if (!this.props.clip) { return; }
    this.props.actions.selectClip(this.props.clip.uuid);
  }

}

export default Cell;
