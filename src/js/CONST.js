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
  userId  : 'DEMOUSERID',
  title   : 'This is only a test',
  artist  : 'mEgA+++dEmOn',
  created : new Date().toISOString(),
  updated : new Date().toISOString(),
};
const DEMO_SONG = {
  scenes       : [],
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
