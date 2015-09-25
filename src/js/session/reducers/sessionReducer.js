'use strict';

import CONST, { Actions } from '../CONST';

const selectCell = (state, action) => ({
  ...state,
  currentCell : action.pos,
});

const selectScene = (state, action) => ({
  ...state,
  selectedSceneId : state.scenes[action.index],
});

export default function sessionReducer (state=CONST.DEFAULT_SESSION, action) {

  switch (action.type) {
  case Actions.SELECT_CELL:
    return selectCell(state, action);
  case Actions.SELECT_SCENE:
    return selectScene(state, action);

  default:
    return state;
  }

}
