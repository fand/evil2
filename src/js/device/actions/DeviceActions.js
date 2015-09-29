'use strict';

import { Actions } from '../CONST';

const play = () => {
  return {
    type: Actions.PLAY,
  };
};

const initDevices = () => {
  return {
    type: Actions.INIT_DEVICES,
  };
};

export default {
  play,
  initDevices,
};
