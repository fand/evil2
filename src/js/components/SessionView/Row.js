'use strict';

import React from 'react';
import {range} from 'lodash';

import Cell from './Cell';

const COLUMNS = 8;

/**
 * SessionView
 *
 */
class Row extends React.Component {

  static propTypes = {
    rowIdx  : React.PropTypes.number.isRequired,
    scene   : React.PropTypes.object,
    session : React.PropTypes.object.isRequired,
    actions : React.PropTypes.object.isRequired,
  };

  constructor (props) {
    super(props);
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className="SessionView__Row" key={this.props.rowIdx}>
        {this.renderCells(this.props.rowIdx)}
      </div>
    );
  }

  renderCells (i) {
    const { scene, clips, session, rowIdx, actions } = this.props;

    let clipIds = this.props.scene ? this.props.scene.clipIds : [];
    let columns = Math.max(clipIds.length, COLUMNS);
    return range(columns).map(j => {
      return (
        <Cell
          clips={clips}
          session={session}
          clipId={clipIds[j]}
          rowIdx={i}
          columnIdx={j}
          actions={actions}
          key={j}></Cell>
      );
    });
  }

}

export default Row;
