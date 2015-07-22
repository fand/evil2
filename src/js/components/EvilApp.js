'use strict';

import React from 'react';

class EvilApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      width : 0
    };
  }

  componentDidMount () {
    window.addEventListener('resize', () => {
      this.setState({width : window.innerWidth});
    });
  }

  render () {
    let {width} = this.state;
    return (
      <div>width = {{width}}</div>
    );
  }
}


export default EvilApp;
