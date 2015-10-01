'use strict';

import React from 'react';
import { range } from 'lodash';

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

  renderCells (i) {
    const { scene, actions, state } = this.props;

    const clipIds = scene ? scene.clipIds : [];
    const columns = Math.max(clipIds.length, COLUMNS);

    return range(columns).map(j => {
      const clipId = clipIds[j];
      const clip = clipId ? state.clip.entities.clips[clipId] : null;

      return (
        <Cell
          clip={clip}
          scene={scene}
          rowIdx={i}
          columnIdx={j}
          id={`${i}-${j}`}
          actions={actions}
          state={state}
          key={j} />
      );
    });
  }

  render () {
    return (
      <div className="SessionView__Row" key={this.props.rowIdx}>
        {this.renderCells(this.props.rowIdx)}
      </div>
    );
  }

}

export default Row;
