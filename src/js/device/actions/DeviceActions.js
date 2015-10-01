'use strict';

import { Actions } from '../CONST';

const play = () => ({
  type : Actions.PLAY,
});

const initDevices = () => ({
  type : Actions.INIT_DEVICES,
});

export default {
  play,
  initDevices,
};
