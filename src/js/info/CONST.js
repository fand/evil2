'use strict';

import uuid from 'uuid';

const Actions = {
  SET_ARTIST : 'INFO:SET_ARTIST',
};

const DEFAULT_INFO = {
  userId  : 'ANONYMOUS',
  title   : 'Untitled',
  artist  : 'ANONYMOUS',
  created : new Date().toISOString(),
  updated : new Date().toISOString(),
};

const DEMO_INFO = {
  userId  : uuid.v4(),
  title   : 'This is only a test',
  artist  : 'mEgA+++dEmOn',
  created : new Date().toISOString(),
  updated : new Date().toISOString(),
};

export default {
  Actions,
  DEFAULT_INFO,
  DEMO_INFO,
};
