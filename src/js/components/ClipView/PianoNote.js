'use strict';

import React, { Component, PropTypes } from 'react';

class PianoNote extends Component {

  static propTypes = {
    note : PropTypes.object.isRequired,
  }

  constructor (props) {
    super(props);
  }

  render () {
    const { note } = this.props;

    return (
      <div className="Pianoroll__Note">
        {`${note[0].time} -> ${note[1].time} : ${note[0].data[0]}`}
      </div>
    );
  }

}

export default PianoNote;
