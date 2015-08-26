'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SessionView from './SessionView';
import ClipView from './ClipView';
import SongInfo from './SongInfo';

import * as SessionActions from '../actions/SessionActions';
import * as ClipActions from '../actions/ClipActions';
import * as SongActions from '../actions/SongActions';
import * as PianorollActions from '../actions/PianorollActions';

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
    const { song, dispatch } = this.props;
    const songActions = bindActionCreators(SongActions, dispatch);
    songActions.initSong();
  }

  render () {
    const { song, clip, dispatch } = this.props;
    const sessionActions   = bindActionCreators(SessionActions, dispatch);
    const clipActions      = bindActionCreators(ClipActions, dispatch);
    const pianorollActions = bindActionCreators(PianorollActions, dispatch);

    return (
      <div className="EvilApp">
        <SessionView clips={song.clipData.clips} session={song.sessionData} actions={sessionActions} />
        <ClipView clip={song.clipData.currentClip} actions={{...clipActions, ...pianorollActions}} />
        <SongInfo info={song.infoData} />
      </div>
    );
  }

}


export default EvilApp;
