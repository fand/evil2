'use strict';

import { Actions } from '../CONST';

const PlayerActions = {

  play () {
    return (dispatch, getState) => {
      dispatch({
        type : Actions.PLAY,
      });

      const interval = getState().playerData.interval;

      const tick = () => {
        const state = getState();

        if (!state.playerData.isPlaying) { return; }

        dispatch({
          type: Actions.TICK,
        });

        setTimeout(tick, interval);
      };

      tick();
    };
  },

  stop () {
    return {
      type : Actions.STOP,
    };
  },

};

export default PlayerActions;
