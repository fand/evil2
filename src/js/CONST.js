'use strict';

import uuid from 'uuid';

const SONG_MODE = {
  SESSION_MODE     : 'SESSION_MODE',
  ARRANGEMENT_MODE : 'ARRANGEMENT_MODE'
};

const DEFAULT_INFO = {
  userId  : 'ANONYMOUS',
  title   : 'Untitled',
  artist  : 'ANONYMOUS',
  created : new Date().toISOString(),
  updated : new Date().toISOString(),
};

const DEFAULT_ENV = {
  tracks : [],
  master : {
    effects : []
  },
};

const DEFAULT_SONG = {
  clipData : {
    clips       : {},
    currentClip : undefined
  },
  sessionData : {
    scenes : [],
  },
  arrangementData : {
    arrangements : [],
  },
  envData  : DEFAULT_ENV,
  infoData : DEFAULT_INFO,
  mode : SONG_MODE.SESSION_MODE
};


const DEMO_ENV = {
  tracks : [],
  master : {
    effects : []
  },
};
const DEMO_INFO = {
  userId  : uuid.v4(),
  title   : 'This is only a test',
  artist  : 'mEgA+++dEmOn',
  created : new Date().toISOString(),
  updated : new Date().toISOString(),
};
const DEMO_SCENES = [{
  uuid     : uuid.v4(),
  name     : 'scene1',
  clipIds  : ['aaa', 'bbb'],
  controls : []
}, {
  uuid     : uuid.v4(),
  name     : 'scene2',
  clipIds  : ['ccc', 'ddd'],
  controls : []
}];
const DEMO_SONG = {
  clipData : {
    clips : {
      aaa: {
        uuid : 'aaa',
        name : 'clips1-1',
        color : '#FF0000',
        midi : [
          {time: 0x0000, data: [0x90, 64, 127]},
          {time: 0x00FF, data: [0x80, 64, 127]},
          {time: 0x0100, data: [0x90, 68, 127]},
          {time: 0x01FF, data: [0x80, 68, 127]},
          {time: 0x0200, data: [0x90, 71, 127]},
          {time: 0x02FF, data: [0x80, 71, 127]},
          {time: 0x0300, data: [0x90, 76, 127]},
          {time: 0x03FF, data: [0x80, 76, 127]},
        ]
      },
      bbb : {
        uuid : 'bbb',
        name : 'clips1-2',
        color : '#FFFF00',
        midi : [
          {time: 0x0000, data: [0x90, 64, 127]},
          {time: 0x00FF, data: [0x80, 64, 127]},
          {time: 0x0100, data: [0x90, 68, 127]},
          {time: 0x01FF, data: [0x80, 68, 127]},
          {time: 0x0200, data: [0x90, 71, 127]},
          {time: 0x02FF, data: [0x80, 71, 127]},
          {time: 0x0300, data: [0x90, 76, 127]},
          {time: 0x03FF, data: [0x80, 76, 127]},
        ]
      },
      ccc : {
        uuid : 'ccc',
        name : 'clips2-1',
        color : '#FF00FF',
        midi : [
          {time: 0x0000, data: [0x90, 52, 127]},
          {time: 0x00FF, data: [0x80, 52, 127]},
          {time: 0x0100, data: [0x90, 56, 127]},
          {time: 0x01FF, data: [0x80, 56, 127]},
          {time: 0x0200, data: [0x90, 59, 127]},
          {time: 0x02FF, data: [0x80, 59, 127]},
          {time: 0x0300, data: [0x90, 64, 127]},
          {time: 0x03FF, data: [0x80, 64, 127]},
        ]
      },
      ddd : {
        uuid : 'ddd',
        name : 'clips2-2',
        color : '#00FFFF',
        midi : [
          {time: 0x0000, data: [0x90, 52, 127]},
          {time: 0x00FF, data: [0x80, 52, 127]},
          {time: 0x0100, data: [0x90, 56, 127]},
          {time: 0x01FF, data: [0x80, 56, 127]},
          {time: 0x0200, data: [0x90, 59, 127]},
          {time: 0x02FF, data: [0x80, 59, 127]},
          {time: 0x0300, data: [0x90, 64, 127]},
          {time: 0x03FF, data: [0x80, 64, 127]},
        ]
      }
    },
    currentClip : undefined,
  },
  sessionData : {
    scenes : DEMO_SCENES,
  },
  arrangementData : {
    arrangements : [],
  },
  clips        : [],
  envData  : DEMO_ENV,
  infoData : DEMO_INFO,
  mode : SONG_MODE.SESSION_MODE
};

const CONST = {
  SONG_MODE,
  DEFAULT_INFO,
  DEFAULT_ENV,
  DEFAULT_SONG,

  DEMO_SONG,
};

export default CONST;
