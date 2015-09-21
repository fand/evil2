'use strict';

const DEFAULT_DEVICE = {
  isPlaying : false,
  devices   : [],
};

const Actions = {
  PLAY         : Symbol(),
  INIT_DEVICES : Symbol(),
};

export default {
  Actions,
  DEFAULT_DEVICE,
};
