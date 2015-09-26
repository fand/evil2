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
    actions : React.PropTypes.object.isRequired,
    state   : React.PropTypes.object.isRequired,
  };

  render () {
    return (
      <div className="SessionView__Row" key={this.props.rowIdx}>
        {this.renderCells(this.props.rowIdx)}
      </div>
    );
  }

  renderCells (i) {
    const { scene, clips, rowIdx, actions, state } = this.props;

    let clipIds = scene ? scene.clipIds : [];
    let columns = Math.max(clipIds.length, COLUMNS);

    return range(columns).map(j => {
      const clipId = clipIds[j];
      const clip = clipId ? state.clip.entities.clips[clipId] : null;

      return (
        <Cell
          clip={clip}
          rowIdx={i}
          columnIdx={j}
          actions={actions}
          state={state}
          key={j}></Cell>
      );
    });
  }

}

export default Row;
