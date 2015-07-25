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
  scenes       : [],
  arrangements : [],
  clips        : [],
  env  : DEFAULT_ENV,
  info : DEFAULT_INFO,
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
  clips    : [{
    uuid : uuid.v4(),
    name : 'clips1-1',
    midi : [
      {time: 0x0000, data: [0x90, 64, 127]},
      {time: 0x0100, data: [0x90, 68, 127]},
      {time: 0x0200, data: [0x90, 71, 127]},
      {time: 0x0300, data: [0x90, 76, 127]},
    ]
  }, {
    uuid : uuid.v4(),
    name : 'clips1-2',
    clips : []
  }],
  controls : []
}, {
  uuid     : uuid.v4(),
  name     : 'scene2',
  clips    : [{
    uuid : uuid.v4(),
    name : 'clips2-1',
    midi : [
      {time: 0x0000, data: [0x90, 52, 127]},
      {time: 0x0100, data: [0x90, 56, 127]},
      {time: 0x0200, data: [0x90, 59, 127]},
      {time: 0x0300, data: [0x90, 64, 127]},
    ]
  }, {
    uuid : uuid.v4(),
    name : 'clips2-2',
    midi : [

    ]
  }],
  controls : []
}];
const DEMO_SONG = {
  scenes       : DEMO_SCENES,
  arrangements : [],
  clips        : [],
  env  : DEMO_ENV,
  info : DEMO_INFO,
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
