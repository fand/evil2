'use strict';

import React from 'react';

class Cell extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="SessionView__Cell">
        Cell({this.props.sceneIdx}:{this.props.trackIdx})
      </div>
    );
  }
}

export default Cell;
