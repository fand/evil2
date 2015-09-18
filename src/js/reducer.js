'use strict';

import clipViewReducer from './clip/reducers/clipViewReducer';
import pianorollReducer from './pianoroll/reducers/pianorollReducer';
import sessionReducer from './session/reducers/sessionReducer';
import clipReducer from './clip/reducers/clipReducer';
import infoReducer from './info/reducers/infoReducer';
import playerReducer from './player/reducers/playerReducer';

// const DEFAULT = {
//   clipData    : {},
//   sessionData : {},
//   infoData    : {},
//   clipView    : {},
//   pianoroll   : {},
// };

import CONST from './CONST';

const reducer = function (state=CONST.DEMO_SONG, action) {

  // init clips first!
  const clipData    = clipReducer(state.clipData, action);
  const sessionData = sessionReducer(state.sessionData, action);
  const infoData    = infoReducer(state.infoData, action);
  const clipView    = clipViewReducer(state.clipView, action);
  const pianoroll   = pianorollReducer(state.pianoroll, action);
  const playerData  = playerReducer(state.playerData, action);

  return {
    clipData,
    sessionData,
    infoData,
    clipView,
    pianoroll,
    playerData,
  };
};

export default reducer;
