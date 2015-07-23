'use strict';

import React from 'react';

import SessionView from './SessionView';

class EvilApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      song : {
        scenes : [{
          clips : []
        }],
        tracks : []
      },
    };
  }

  componentDidMount () {
  }

  render () {
    return (
      <SessionView
        song={this.state.song}
        scenes={this.state.song.scenes}
        tracks={this.state.song.tracks} />
    );
  }
}


export default EvilApp;
