'use strict';

import React from 'react';

import SessionView from './SessionView';

class EvilApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
  }

  render () {
    return (
      <SessionView />
    );
  }
}


export default EvilApp;
