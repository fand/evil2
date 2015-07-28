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
        <li>UUID : {this.props.clip.uuid}</li>
        <li>
          <input className="ClipView__ClipName" value={this.props.clip.name}
            onChange={::this.onChangeClipName}
            />
        </li>
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

  onChangeClipName (e) {
    this.props.actions.setClipName(this.props.clip.uuid, e.target.value);
  }

}


export default ClipView;
