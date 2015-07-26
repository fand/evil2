'use strict';

import React, { Component } from 'react';

import SessionView from './SessionView';
import ClipView from './ClipView';
import SongInfo from './SongInfo';

import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';

import * as SessionActions from '../actions/SessionActions';
import * as ClipActions from '../actions/ClipActions';
import * as SongActions from '../actions/SongActions';

@connect(state => {
  return {
    song : state.song,
    clip : state.song.clipData.currentClip,
  };
})
class EvilApp extends Component {

  constructor (props) {
    super(props);
    this.state = {
      song : this.props.song,
      clip : null
    };
  }

  componentDidMount () {
    const { song, dispatch } = this.props;
    const songActions = bindActionCreators(SongActions, dispatch);
    songActions.initSong();
  }

  render () {
    const { song, clip, dispatch } = this.props;
    const sessionActions = bindActionCreators(SessionActions, dispatch);
    const clipActions    = bindActionCreators(ClipActions, dispatch);
    return (
      <div className="EvilApp">
        <SessionView session={song.sessionData} actions={sessionActions} />
        <ClipView clip={clip} actions={clipActions} />
        <SongInfo info={song.infoData} />
      </div>
    );
  }

}


export default EvilApp;
