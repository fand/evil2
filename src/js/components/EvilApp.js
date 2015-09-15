'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SessionView from '../session/components/SessionView';
import ClipView from '../clip/components/ClipView';
import SongInfo from '../info/components/SongInfo';

import * as SessionActions from '../session/actions/SessionActions';
import * as SongActions from '../actions/SongActions';


@connect(state => {
  const { song, view } =  state;
  return { song, view };
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
    const { song } = this.props;
    const currentClip = song.clipData.clips[song.clipData.currentClipId];

    return (
      <div className="EvilApp">
        <SessionView clips={song.clipData.clips} session={song.sessionData} />
        <ClipView clip={currentClip} />
        <SongInfo info={song.infoData} />
      </div>
    );
  }

}


export default EvilApp;
