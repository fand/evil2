'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as SessionActions from '../actions/SessionActions';

import {range} from 'lodash';

import Row from './Row';

const ROWS = 8;

/**
 * SessionView
 *
 */
@connect((state) => state, (dispatch) => {
  return { actions : bindActionCreators(SessionActions, dispatch) };
})
class SessionView extends React.Component {

  static propTypes = {
    clips   : React.PropTypes.object.isRequired,
    session : React.PropTypes.object.isRequired,
  };

  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {}

  renderRow (i) {
    const { session, clips, actions } = this.props;
    return (
      <Row
        rowIdx={i}
        scene={session.scenes[i]}
        clips={clips}
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
