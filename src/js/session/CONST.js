'use strict';

import uuid from 'uuid';

const DEFAULT_SESSION = {
    scenes : [],
};

const DEMO_SESSION = {
  scenes : [{
    uuid        : uuid.v4(),
    name        : 'scene1',
    clipIds     : ['aaa', 'bbb'],
    controls    : [],
    beatsPerBar : 4
  }, {
    uuid        : uuid.v4(),
    name        : 'scene2',
    clipIds     : ['ccc', 'ddd'],
    controls    : [],
    beatsPerBar : 4
  }],
};

export default {
  DEFAULT_SESSION,
  DEMO_SESSION,
};
