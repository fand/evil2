'use strict';

import React from 'react';
import { connect } from 'react-redux';

import Pianoroll from '../../pianoroll/components/Pianoroll';
import ClipInfo from './ClipInfo';

@connect((state) => {
  const focusedClipId = state.selection.focusedClipId;
  const clip = (focusedClipId) ?  state.clip.entities.clips[focusedClipId] : null;
  return { clip };
})
class ClipView extends React.Component {

  static propTypes = {
    state   : React.PropTypes.object.isRequired,
    actions : React.PropTypes.object.isRequired,
    clip    : React.PropTypes.object,
  }

  renderClip () {
    const { state, actions, clip } = this.props;
    if (!clip) { return; }

    return (
      <div>
        <ClipInfo clip={clip} state={state} actions={actions}/>
        <Pianoroll clip={clip} state={state} actions={actions}/>
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

}


export default ClipView;
