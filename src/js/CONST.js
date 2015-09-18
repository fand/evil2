'use strict';

import SESSION from './session/CONST';
import CLIP from './clip/CONST';
import INFO from './info/CONST';
import PLAYER from './player/CONST';

const SONG_MODE = {
  SESSION_MODE     : 'SESSION_MODE',
  ARRANGEMENT_MODE : 'ARRANGEMENT_MODE'
};

const DEFAULT_ENV = {
  tracks : [],
  master : {
    effects : []
  },
};

const DEFAULT_SONG = {
  clipData : CLIP.DEFAULT_CLIP,
  sessionData : SESSION.DEFAULT_SESSION,
  arrangementData : {
    arrangements : [],
  },
  envData  : DEFAULT_ENV,
  infoData : INFO.DEFAULT_INFO,
  mode : SONG_MODE.SESSION_MODE,
  playerData : PLAYER.DEFAULT_PLAY,
};

const DEMO_ENV = {
  tracks : [],
  master : {
    effects : []
  },
};

const DEMO_SONG = {
  clipData : CLIP.DEMO_CLIP,
  sessionData : SESSION.DEMO_SESSION,
  arrangementData : {
    arrangements : [],
  },
  clips        : [],
  envData  : DEMO_ENV,
  infoData : INFO.DEMO_INFO,
  mode : SONG_MODE.SESSION_MODE,
  playerData : PLAYER.DEFAULT_PLAY,
};

const CONST = {
  SONG_MODE,
  DEFAULT_ENV,
  DEFAULT_SONG,

  DEMO_SONG,
};

export default CONST;
