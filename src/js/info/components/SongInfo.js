'use strict';

import React from 'react';

class SongInfo extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="SongInfo">
        <ul>
          <li>title  : {this.props.info.title}</li>
          <li>artist : {this.props.info.artist}</li>
          <li>userId : {this.props.info.userId}</li>
        </ul>
      </div>
    );
  }

}

export default SongInfo;
