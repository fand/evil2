'use strict';

import { Actions } from '../CONST';

const PlayerActions = {

  play () {
    return (dispatch, getState) => {
      dispatch({
        type : Actions.PLAY,
      });

      const tick = () => {
        const state = getState();

        if (!state.player.isPlaying) { return; }

        dispatch({
          type: Actions.TICK,
        });

        setTimeout(tick, state.player.interval);
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
