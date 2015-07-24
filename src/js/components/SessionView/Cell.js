'use strict';

import React from 'react';

class Cell extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="SessionView__Cell">
        <span className="SessionView__Cell__PlayButton">▲</span>
        Cell({this.props.rowIdx}:{this.props.columnIdx})
      </div>
    );
  }
}

Cell.propTypes = {
  columnIdx : React.PropTypes.number.isRequired,
  rowIdx    : React.PropTypes.number.isRequired
};
Cell.defaultProps = {
};

export default Cell;
