'use strict';

import React, { PropTypes } from 'react';

class SongInfo extends React.Component {

  static propTypes = {
    state   : React.PropTypes.object.isRequired,
    actions : React.PropTypes.object.isRequired,
  };

  render () {
    const info = this.props.state.songInfo;

    return (
      <div className="SongInfo">
        <ul>
          <li>title  : {info.title}</li>
          <li>artist : {info.artist}</li>
          <li>userId : {info.userId}</li>
        </ul>
      </div>
    );
  }

}

export default SongInfo;
