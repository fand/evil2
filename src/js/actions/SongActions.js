'use strict';

// import { SELECT_CLIP } from '../CONST';

const INIT_SONG = 'INIT_SONG';

export function initSong () {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type   : INIT_SONG });
    }, 0);
  };
}
