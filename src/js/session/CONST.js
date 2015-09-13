'use strict';

import uuid from 'uuid';

const DEFAULT_SCENES = {
    scenes : [],
};

const DEMO_SCENES = [{
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
}];

export default {
  DEFAULT_SCENES,
  DEMO_SCENES,
};
