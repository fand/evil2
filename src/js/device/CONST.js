'use strict';

const Actions = {
  PLAY         : 'DEVICE:PLAY',
  INIT_DEVICES : 'DEVICE:INIT_DEVICES',
};

const DEVICE_TYPE = {
  REZ_SYNTH : 'REZ_SYNTH',
};

const DEFAULT_DEVICE = {
  entities : { device : {} },
};

const DEMO_DEVICE = {
  entities : {
    devices : {
      0 : {
        data : {
          type : DEVICE_TYPE.REZ_SYNTH,
        },
        entity : null,
      },
    }
  }
};

export default {
  Actions,
  DEVICE_TYPE,
  DEFAULT_DEVICE,
  DEMO_DEVICE,
};
