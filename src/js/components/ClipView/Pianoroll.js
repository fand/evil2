'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'redux/react';

import PianoNote from './PianoNote';

@connect(state => {
  const { view } =  state.root;
  return { ...view.clipView };
})
class Pianoroll extends Component {

  static propTypes = {
    clip : PropTypes.object.isRequired,
  }

  constructor (props) {
    super(props);
  }

  render () {
    const { clip, notes } = this.props;

    return (
      <div className="Pianoroll">
        { notes.map((n, i) => this.renderNote(n, i)) }
      </div>
    );
  }

  renderNote (note, i) {
    return <PianoNote note={note} key={i} />;
  }

}


export default Pianoroll;
