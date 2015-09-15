'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ClipActions from '../actions/ClipActions';

import Pianoroll from '../../pianoroll/components/Pianoroll';
import ClipInfo from './ClipInfo';

@connect((state) => state, (dispatch) => {
  return { actions : bindActionCreators(ClipActions, dispatch) };
})
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
        <ClipInfo clip={this.props.clip} actions={this.props.actions}/>
        <Pianoroll clip={this.props.clip} clipActions={this.props.actions}/>
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
