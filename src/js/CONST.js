'use strict';

import uuid from 'uuid';

import SESSION from './session/CONST';
import CLIP from './clip/CONST';

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
  sessionData : SESSION.DEFAULT_SESSION,
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
const DEMO_SONG = {
  clipData : CLIP.DEMO_CLIP,
  sessionData : SESSION.DEMO_SESSION,
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
