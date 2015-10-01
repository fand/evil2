'use strict';

import React from 'react';

class ClipInfo extends React.Component {

  static propTypes = {
    clip    : React.PropTypes.object.isRequired,
    actions : React.PropTypes.object.isRequired,
  }

  constructor (props) {
    super(props);
  }

  onChangeClipName (e) {
    this.props.actions.setClipName(this.props.clip.uuid, e.target.value);
  }

  render () {
    return (
      <ul>
        <li>UUID : {this.props.clip.uuid}</li>
        <li>
          <input className="ClipView__ClipName" value={this.props.clip.name}
            onChange={::this.onChangeClipName} />
        </li>
      </ul>
    );
  }

}


export default ClipInfo;
