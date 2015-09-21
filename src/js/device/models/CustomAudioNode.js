'use strict';

import Ctx from './Ctx';

class CustomAudioNode {

  constructor () {
    this.input  = Ctx.createGain();
    this.output = Ctx.createGain();
    this.dry    = Ctx.createGain();
    this.wet    = Ctx.createGain();

    this.dry.gain.value = 0.0;
    this.wet.gain.value = 1.0;

    this.input.connect(this.dry);
    this.dry.connect(this.output);
    this.wet.connect(this.output);
  }

  connect (dst) {
    if (dst instanceof AudioNode) {
      this.output.connect(dst);
    }
    else if (dst instanceof CustomAudioNode) {
      this.output.connect(dst.input);
    }
    else {
      throw new TypeError(
        'The argument must be an instance of AudioNode or CustomAudioNode'
      );
    }
  }

  disconnect (dst) {
    if (dst instanceof AudioNode) {
      this.output.disconnect(dst);
    }
    else if (dst instanceof CustomAudioNode) {
      this.output.disconnect(dst.input);
    }
    else {
      throw new TypeError(
        'The argument must be an instance of AudioNode or CustomAudioNode'
      );
    }
  }

  setDry (dryRatio) {
    if (dryRatio < 0.0 || 1.0 < dryRatio) {
      throw new TypeError('dryRatio must be a Number from 0.0 to 1.0');
    }
    this.dry.gain.value = dryRatio;
    this.wet.gain.value = 1.0 - dryRatio;
  }

  setWet (wetRatio) {
    if (wetRatio < 0.0 || 1.0 < wetRatio) {
      throw new TypeError('wetRatio must be a Number from 0.0 to 1.0');
    }
    this.dry.gain.value = 1.0 - wetRatio;
    this.wet.gain.value = wetRatio;
  }

}

export default CustomAudioNode;
