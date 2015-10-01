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

  static propTypes = {
    actions : React.PropTypes.object.isRequired,
    state   : React.PropTypes.object.isRequired,
  };

  renderRow (i) {
    const { actions, state } = this.props;
    const scene = state.scene.entities.scenes[state.session.sceneIds[i]];

    return (
      <Row
        rowIdx={i}
        scene={scene}
        actions={actions}
        state={state}
        key={i} />
    );
  }

  render () {
    const { state } = this.props;
    const sceneIds = state.session.sceneIds;

    const rowsNum = Math.max(sceneIds.length, ROWS);
    const rows = range(rowsNum).map(i => this.renderRow(i));

    return (
      <div className="SessionView">
        {rows}
      </div>
    );
  }

}

export default SessionView;
