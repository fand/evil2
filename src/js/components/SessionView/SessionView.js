'use strict';

import React from 'react';
import {range} from 'lodash';

import Row from './Row';

const ROWS = 8;

/**
 * SessionView
 *
 */
class SessionView extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {

  }

  renderRow (i) {
    return (
      <Row
        rowIdx={i}
        scene={this.props.song.scenes[i]}
        key={i}></Row>
    );
  }

  render () {
    let rowsNum = Math.max(this.props.song.scenes.length, ROWS);
    let rows = range(rowsNum).map(i => this.renderRow(i));
    return (
      <div className="SessionView">
        {rows}
      </div>
    );
  }

}

SessionView.propTypes = {
  scenes : React.PropTypes.array,
  tracks : React.PropTypes.array,
};
SessionView.defaultProps = {
  scenes : [],
  tracks : [],
};

export default SessionView;
