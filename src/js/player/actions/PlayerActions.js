'use strict';

import { Actions } from '../CONST';

const play = () => {

  return (dispatch, getState) => {

    const interval = getState().playerData.interval;

    const tick = () => {
      const state = getState();
      if (!state.playerData.isPlaying) { return; }

      dispatch({
        ...state,
        playerData : {
          ...state.playerData,
          position : position + (interval / beatLength),
        },
      });

      setTimeout(tick, interval);
    };

    tick();
  };

  return {
    type : Actions.PLAY,
  };
};

const stop = () => {
  return {
    type : Actions.STOP,
  };
};

export default {
  play, stop,
};
