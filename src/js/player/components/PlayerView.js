'use strict';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PlayerActions from '../actions/PlayerActions';

@connect(
  (state) => ({ playerData : state.playerData }),
  (dispatch) => ({
    actions : bindActionCreators(PlayerActions, dispatch),
  }),
)
class PlayerView extends Component {

  constructor () {
    super();
  }

  render () {
    return (
      <div className="PlayerView">
        <div className="PlayerView__Play" onClick={::this.play}>
          PLAY
        </div>
        <div className="PlayerView__Stop" onClick={::this.stop}>
          STOP
        </div>
      </div>
    );
  }

  play () {
    this.props.actions.play();
  }

  stop () {
    this.props.actions.stop();
  }

}

export default PlayerView;
