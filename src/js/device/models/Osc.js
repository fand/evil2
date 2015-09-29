'use strict';

import Ctx from './Ctx';
import CustomAudioNode from './CustomAudioNode';

const OSC_TYPE = {
  SINE     : 'sine',
  SQUARE   : 'square',
  RECT     : 'square',
  SAWTOOTH : 'sawtooth',
  SAW      : 'sawtooth',
  TRIANGLE : 'triangle',
};

const OFFSETS = [
  0, 0.01, 0.03, -0.02, 0.05, 0.063, -0.041, -0.07
];

class Osc extends CustomAudioNode {

  constructor () {
    super();
    this.oscType  = 'sine';
    this.nodes    = null;
  }

  setType (type) {
    if (! OSC_TYPE[type]) {
      throw new TypeError(`Oscillator type "${type}" is not defined`);
    }
    this.type = type;
  }

  _createNodes () {
    if (this.type === OSC_TYPE.SUPERSAW) {
      return [0,1,2,3,4,5,6,7].map(() => {
        const o = Ctx.createOscillator();
        o.type = OSC_TYPE.SAW;
        return o;
      });
    }

    const o = Ctx.createOscillator();
    o.type = this.oscType;
    return o;
  }

  noteOn (freq, time) {
    this.nodes = this._createNodes();
    this.nodes.forEach((n, i) => {
      n.freq.value = freq + OFFSETS[i];
      n.start(time);
      n.connect(this.wet);
    });
  }

  noteOff (freq, time) {
    this.nodes.forEach((n) => {
      n.stop(time);
      setTimeout(() => {
        n.disconnect(this.wet);
      }, time + 100);
    });

    this.nodes = null;
  }

}

export default Osc;
