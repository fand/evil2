'use strict';

import React from 'react';

class Cell extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let clip = this.props.clip;
    let clipName = clip ? clip.name : '';
    return (
      <div className="SessionView__Cell" onClick={this.onClick.bind(this)}>
        <span className="SessionView__Cell__PlayButton">▲</span>
        {clipName}
      </div>
    );
  }

  onClick () {
    console.log('yoeeee');
    console.log(this.props.clip);
  }
}

Cell.propTypes = {
  columnIdx : React.PropTypes.number.isRequired,
  rowIdx    : React.PropTypes.number.isRequired
};
Cell.defaultProps = {
};

export default Cell;
