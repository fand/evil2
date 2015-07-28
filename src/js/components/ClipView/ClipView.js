'use strict';

import React from 'react';

import Pianoroll from './Pianoroll';

class ClipView extends React.Component {

  static propTypes = {
    clip    : React.PropTypes.object,
    actions : React.PropTypes.object.isRequired,
  }

  constructor (props) {
    super(props);
  }

  componentDidUpdate (prevProps) {
    if (!this.props.clip) { return; }
    if (!prevProps.clip || (this.props.clip.uuid !== prevProps.clip.uuid)) {
      this.props.actions.clipSelected(this.props.clip);
    }
  }

  renderClip () {
    if (!this.props.clip) { return; }
    return (
      <div>
        <ul>
          <li>UUID : {this.props.clip.uuid}</li>
          <li>
            <input className="ClipView__ClipName" value={this.props.clip.name}
              onChange={::this.onChangeClipName}
              />
          </li>
        </ul>

        <Pianoroll clip={this.props.clip} />
      </div>
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
