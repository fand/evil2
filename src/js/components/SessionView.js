'use strict';

import React from 'react';
import {range} from 'lodash';

const COLUMNS = 8;
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

  renderRows () {
    let rows = Math.max(this.props.scenes.length, ROWS);
    return range(rows).map(i => {
      return (
        <div className="SessionView__Row" key={i}>
          {this.renderCells(i)}
        </div>
      );
    });
  }

  renderCells (i) {
    let columns = Math.max(this.props.tracks.length, COLUMNS);
    return range(columns).map(j => {
      return (
        <div className="SessionView__Cell" key={j}>
          Cell({i + ':' + j})
        </div>
      );
    });
  }

  render () {
    let rows = this.renderRows();
    return (
      <div className="SessionView">
        {rows}
      </div>
    );
  }
}


export default SessionView;
