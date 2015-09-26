'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SessionView from '../session/components/SessionView';
import ClipView from '../clip/components/ClipView';
import SongInfo from '../info/components/SongInfo';
import PlayerView from '../player/components/PlayerView';

import * as SessionActions from '../session/actions/SessionActions';
import * as SongActions from '../song/actions/SongActions';
import * as ClipActions from '../clip/actions/ClipActions';
import * as SelectionActions from '../selection/actions';
import * as DeviceActions from '../device/actions/DeviceActions';

@connect(state => ({state}))
class EvilApp extends Component {

  constructor (props) {
    super(props);
    this.state = {
      song : this.props.song,
      clip : null
    };
  }

  componentDidMount () {
    const songActions = bindActionCreators(SongActions, this.props.dispatch);
    songActions.initSong();
    this.props.dispatch(DeviceActions.initDevices());
  }

  render () {
    const { state, dispatch } = this.props;

    const actions = {
      clip      : bindActionCreators(ClipActions, dispatch),
      session   : bindActionCreators(SessionActions, dispatch),
      selection : bindActionCreators(SelectionActions, dispatch),
    };
console.log(actions);
    return (
      <div className="EvilApp">
        <SessionView state={state} actions={actions} />
      </div>
    );

    // <ClipView state={state} />
    // <SongInfo state={state} />
    // <PlayerView />
  }

}

export default EvilApp;
