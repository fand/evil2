
'use strict';

import clipViewReducer  from './clip/reducers/clipViewReducer';
import pianorollReducer from './pianoroll/reducers/pianorollReducer';
import sessionReducer   from './session/reducers/sessionReducer';
import clipReducer      from './clip/reducers/clipReducer';
import songInfoReducer  from './info/reducers/infoReducer';
import playerReducer    from './player/reducers/playerReducer';
import deviceReducer    from './device/reducers/deviceReducer';
import sceneReducer     from './scene/reducers/sceneReducer';
import selectionReducer from './selection/reducers';

import CONST from './CONST';

const reducer = function (state = CONST.DEMO_SONG, action) {

  // init clips first!
  const clip      = clipReducer(state.clip, action);
  const session   = sessionReducer(state.session, action);
  const scene     = sceneReducer(state.scene, action);
  const selection = selectionReducer(state.selection, action);
  const pianoroll = pianorollReducer(state.pianoroll, action);
  const songInfo  = songInfoReducer(state.songInfo, action);
  const player    = playerReducer(state.player, action);
  const device    = deviceReducer(state.device, action);

  const s = {
    clip,
    session,
    scene,
    selection,
    pianoroll,
    songInfo,
    player,
    device,
  };
  // console.log('>>>>>>>>');console.log(s);
  return s;
};

export default reducer;
