'use strict';

import uuid from 'uuid';

const Actions = {
  SELECT_CLIP  : 'SELECT_CLIP',
  SELECT_SCENE : 'SELECT_SCENE',
  SELECT_CELL  : 'SELECT_CELL',
};

const DEFAULT_SESSION = {
    scenes : [],
};

const uuids = [uuid.v4(), uuid.v4()];
const DEMO_SESSION = {
  entities: {
    [uuids[0]] : {
      uuid        : uuids[0],
      name        : 'scene1',
      clipIds     : ['aaa', 'bbb'],
      controls    : [],
      beatsPerBar : 4,
    },
    [uuids[1]] : {
      uuid        : uuids[1],
      name        : 'scene2',
      clipIds     : ['ccc', 'ddd'],
      controls    : [],
      beatsPerBar : 4,
    },
  },
  scenes : uuids,
};

export default {
  Actions,
  DEFAULT_SESSION,
  DEMO_SESSION,
};
