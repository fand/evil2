'use strict';

import React, { Component } from 'react';

import SessionView from './SessionView';
import ClipView from './ClipView';
import SongInfo from './SongInfo';

import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';

import * as SessionActions from '../actions/SessionActions';
import * as ClipActions from '../actions/ClipAction';

@connect(state => ({
  song : state.Song.currentSong,
  clip : state.Clip.currentClip
}))
class EvilApp extends Component {

  constructor (props) {
    super(props);
    this.state = {
      song : this.props.song,
      clip : null
    };
  }

  componentDidMount () {
  }

  render () {
    const { song, clip, dispatch } = this.props;
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
