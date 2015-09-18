'use strict';

import { Actions } from '../CONST';

const play = () => {
  return {
    type : Actions.PLAY,
  };
};

const stop = () => {
  return {
    type : Actions.STOP,
  };
};

export default {
  play, stop,
};
