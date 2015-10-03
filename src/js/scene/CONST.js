'use strict';

const Actions = {};

const DEFAULT_SCENE = {
  entities : {},
};

const DEMO_SCENE = {
  entities : {
    scenes : {
      scene1 : {
        uuid        : 'scene1',
        name        : 'scene1',
        clipIds     : ['aaa', 'bbb'],
        controls    : [],
        beatsPerBar : 4,
      },
      scene2 : {
        uuid        : 'scene2',
        name        : 'scene2',
        clipIds     : ['ccc', 'ddd'],
        controls    : [],
        beatsPerBar : 4,
      },
    },
  },
};

export default {
  Actions,
  DEFAULT_SCENE,
  DEMO_SCENE,
};
