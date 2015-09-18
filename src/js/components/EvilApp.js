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

@connect((state) => {
  const { clipData, sessionData, infoData } = state;
  return { clipData, sessionData, infoData };
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
    const songActions = bindActionCreators(SongActions, this.props.dispatch);
    songActions.initSong();
  }

  render () {
    const { clipData, sessionData, infoData } = this.props;

    const currentClip = clipData.clips[clipData.currentClipId];

    return (
      <div className="EvilApp">
        <SessionView clips={clipData.clips} session={sessionData} />
        <ClipView clip={currentClip} />
        <SongInfo info={infoData} />
        <PlayerView />
      </div>
    );
  }

}


export default EvilApp;
