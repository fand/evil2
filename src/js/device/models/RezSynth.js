'use strict';

import Device from './Device';
import Osc from './Osc';

class RezSynth extends Device {

  constructor () {
    super();

    this.type1 = 'SINE';
    this.type2 = 'RECT';

    this.osc1 = new Osc(this.type1);
    this.osc1.connect(this.wet);
  }

  noteOn (noteNum, time) {
    this.osc1.noteOn(440, time);
  }

  noteOff (noteNum, time) {
    this.osc1.noteOff(440, time);
  }

}

export default RezSynth;
