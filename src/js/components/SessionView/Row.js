'use strict';

import React from 'react';
import {range} from 'lodash';

import Cell from './Cell';

const COLUMNS = 8;

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

  render () {
    return (
      <div className="SessionView__Row" key={this.props.rowIdx}>
        {this.renderCells(this.props.rowIdx)}
      </div>
    );
  }

  renderCells (i) {
    let clips = this.props.scene ? this.props.scene.clips : [];
    let columns = Math.max(clips.length, COLUMNS);
    return range(columns).map(j => {
      return (
        <Cell
          clip={clips[j]}
          rowIdx={i}
          columnIdx={j}
          key={j}></Cell>
      );
    });
  }

}


export default SessionView;
