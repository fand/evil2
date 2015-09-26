'use strict';

import SESSION from './session/CONST';
import CLIP from './clip/CONST';
import SELECTION from './selection/CONST';

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
  clip      : CLIP.DEFAULT_CLIP,
  session   : SESSION.DEFAULT_SESSION,
  selection : SELECTION.DEFAULT_SELECTION,

  arrangementData : {
    arrangements : [],
  },
  env    : DEFAULT_ENV,
  info   : INFO.DEFAULT_INFO,
  mode   : SONG_MODE.SESSION_MODE,
  player : PLAYER.DEFAULT_PLAY,
};

const DEMO_ENV = {
  tracks : [],
  master : {
    effects : []
  },
};

const DEMO_SONG = {
  clip      : CLIP.DEMO_CLIP,
  session   : SESSION.DEMO_SESSION,
  selection : SELECTION.DEFAULT_SELECTION,

  arrangement : {
    arrangements : [],
  },
  env    : DEMO_ENV,
  info   : INFO.DEMO_INFO,
  mode   : SONG_MODE.SESSION_MODE,
  player : PLAYER.DEFAULT_PLAY,
};

const CONST = {
  SONG_MODE,
  DEFAULT_ENV,
  DEFAULT_SONG,

  DEMO_SONG,
};

export default CONST;
