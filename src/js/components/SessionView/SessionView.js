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
    session : React.PropTypes.object.isRequired,
    actions : React.PropTypes.object.isRequired,
  };

  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {}

  renderRow (i) {
    const { session, actions } = this.props;
    return (
      <Row
        rowIdx={i}
        scene={session.scenes[i]}
        session={session}
        actions={actions}
        key={i}></Row>
    );
  }

  render () {
    let rowsNum = Math.max(this.props.session.scenes.length, ROWS);
    let rows = range(rowsNum).map(i => this.renderRow(i));
    return (
      <div className="SessionView">
        {rows}
      </div>
    );
  }

}

export default SessionView;
