'use strict';

import React from 'react';

import SessionView from './SessionView';
import ClipView from './ClipView';
import SongInfo from './SongInfo';

class EvilApp extends React.Component {
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
    return (
      <div className="EvilApp">
        <SessionView song={this.state.song} />
        <ClipView clip={this.state.clip} />
        <SongInfo info={this.state.song.info} />
      </div>
    );
  }
}


export default EvilApp;
