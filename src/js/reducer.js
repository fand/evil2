'use strict';

import clipViewReducer from './clip/reducers/clipViewReducer';
import pianorollReducer from './pianoroll/reducers/pianorollReducer';
import sessionReducer from './session/reducers/sessionReducer';
import clipReducer from './clip/reducers/clipReducer';
import infoReducer from './info/reducers/infoReducer';
import playerReducer from './player/reducers/playerReducer';
import deviceReducer from './device/reducers/deviceReducer';
import sceneReducer from './scene/reducers/sceneReducer';

import CONST from './CONST';

const reducer = function (state=CONST.DEMO_SONG, action) {

  // init clips first!
  const clipData    = clipReducer(state.clipData, action);
  const sessionData = sessionReducer(state.sessionData, action);
  const infoData    = infoReducer(state.infoData, action);
  const clipView    = clipViewReducer(state.clipView, action);
  const pianoroll   = pianorollReducer(state.pianoroll, action);
  const playerData  = playerReducer(state.playerData, action);
  const deviceData  = deviceReducer(state.deviceData, action);
  const sceneData   = sceneReducer(state.sceneData, action);

  const s = {
    clipData,
    sessionData,
    infoData,
    clipView,
    pianoroll,
    playerData,
    deviceData,
    sceneData,
  };
  console.log('>>>>>>>>');console.log(s);
  return s;
};

export default reducer;
