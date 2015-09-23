'use strict';

import CONST from '../CONST';
import RezSynth from './RezSynth';

const create = (data) => {
  if (data.type === CONST.DEVICE_TYPE.REZ_SYNTH) {
    return new RezSynth(data);
  }
};

export default {
  create,
};
