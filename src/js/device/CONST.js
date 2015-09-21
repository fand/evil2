'use strict';

const DEVICE_TYPE = {
  REZ_SYNTH : 'REZ_SYNTH',
};

const DEFAULT_DEVICE = {
  data : {
    device : {},
  },
  entities : {
    device : {},
  },
};

const DEMO_DEVICE = {
  device : {
    0 : {
      data : {
        name : DEVICE_TYPE.REZ_SYNTH,
      },
      entity : null,
    },
  }
};

const Actions = {
  PLAY         : Symbol(),
  INIT_DEVICES : Symbol(),
};

export default {
  Actions,
  DEFAULT_DEVICE,
  DEMO_DEVICE,
  DEVICE_TYPE,
};
