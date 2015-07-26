'use strict';

import React, { Component } from 'react';

import SessionView from './SessionView';
import ClipView from './ClipView';
import SongInfo from './SongInfo';

import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';

import * as SessionActions from '../actions/SessionActions';
import * as ClipActions from '../actions/ClipAction';
import * as SongActions from '../actions/SongActions';

// @connect(state => ({
//   song : state.Song.currentSong,
//   clip : state.Clip.currentClip
// }))
@connect(state => {
  console.log(state);
  return {
    song : state.evil.songData.currentSong,
    clip : state.evil.clipData.currentClip
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
    const { evil, dispatch } = this.props;
    const songActions = bindActionCreators(SongActions, dispatch);
    songActions.initSong();
  }

  render () {
    const { song, clip, dispatch } = this.props;
    console.log(clip);
    const sessionActions = bindActionCreators(SessionActions, dispatch);
    const clipActions    = bindActionCreators(ClipActions, dispatch);
    return (
      <div className="EvilApp">
        <SessionView song={song} actions={sessionActions} />
        <ClipView clip={clip} actions={clipActions} />
        <SongInfo info={song.info} />
      </div>
    );
  }

}


export default EvilApp;
