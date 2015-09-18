'use strict';

const DEFAULT_PLAY = {
  isPlaying : false
};

const Actions = {
  PLAY : Symbol(),
  STOP : Symbol(),
};

export default {
  Actions,
  DEFAULT_PLAY,
};
