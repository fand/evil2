'use strict';

import React from 'react';

import SessionView from './SessionView';
import SongInfo from './SongInfo';

class EvilApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      song : this.props.song
    };
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className="EvilApp">
        <SessionView
          song={this.state.song}
          scenes={this.state.song.scenes}
          tracks={this.state.song.tracks} />
        <SongInfo info={this.state.song.info}></SongInfo>
      </div>
    );
  }
}


export default EvilApp;
