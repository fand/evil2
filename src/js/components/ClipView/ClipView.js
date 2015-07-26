'use strict';

import React from 'react';

class ClipView extends React.Component {

  static propTypes = {
    clip    : React.PropTypes.object,
    actions : React.PropTypes.object.isRequired,
  }

  constructor (props) {
    super(props);
  }

  renderClip () {
    if (!this.props.clip) { return; }
    return (
      <ul>
        <li><input className="ClipView__ClipId" value={this.props.clip.uuid} /></li>
        <li><input className="ClipView__ClipName" value={this.props.clip.name} /></li>
      </ul>
    );
  }

  render () {
    return (
      <div className="ClipView">
        {this.renderClip()}
      </div>
    );
  }

}


export default ClipView;
