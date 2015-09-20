'use strict';

const DEFAULT_PLAY = {
  isPlaying  : false,
  timer      : null,
  interval   : 1000,
  beatLength : 500,
  bpm        : 120,
  position   : 0,
};

const Actions = {
  PLAY : Symbol(),
  STOP : Symbol(),
};

export default {
  Actions,
  DEFAULT_PLAY,
};
