'use strict';

const DEFAULT_TRACK = {
  entities : {
    tracks : {
      0 : {
        uuid     : 0,
        name     : 'Drum',
        clip     : null,
        deviceId : 0,
      },
      1 : {
        uuid     : 1,
        name     : 'Bass',
        clip     : null,
        deviceId : 1,
      },
    },
  },
  tracks : [0, 1],
};

const Actions = {
  TICK     : 'TRACK:TICK',
  SET_CLIP : 'TRACK:SET_CLIP',
};

export default {
  Actions,
  DEFAULT_TRACK,
};
