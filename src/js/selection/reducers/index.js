import CONST, { Actions } from '../CONST';

const selectClip = (state, action) => ({
  ...state,
  selectedClipIds : [...state.selectedClipIds, action.clipId],
});

const selectScene = (state, action) => ({
  ...state,
  selectedSceneIds : [...state.selectedSceneIds, action.sceneId],
});

const selectCell = (state, action) => ({
  ...state,
  selectedCellIds : [...state.selectedCellIds, action.cellId],
});

const deselectClip = (state, action) => {
  const newClipIds = state.selectedClipIds.filter(c => c !== action.clipId);
  return {
    ...state,
    selectedClipIds : newClipIds,
  }
};

const deselectScene = (state, action) => {
  const newSceneIds = state.selectedSceneIds.filter(c => c !== action.sceneId);
  return {
    ...state,
    selectedSceneIds : newSceneIds,
  }
};

const deselectCell = (state, action) => {
  const newCellIds = state.selectedCellIds.filter(c => c !== action.cellId);
  return {
    ...state,
    selectedCellIds : newCellIds,
  }
};

const focusClip = (state, action) => ({
  ...state,
  focusedClipId : action.clipId,
});

const focusScene = (state, action) => ({
  ...state,
  focusedSceneId : action.sceneId,
});

const selectionReducer = (state=CONST.DEFAULT_SELECTION, action) => {

  switch (action.type) {
  case Actions.SELECT_CLIP:
    return selectClip(state, action);
  case Actions.SELECT_SCENE:
    return selectScene(state, action);
  case Actions.SELECT_CELL:
    return selectCell(state, action);
  case Actions.DESELECT_CLIP:
    return deselectClip(state, action);
  case Actions.DESELECT_SCENE:
    return deselectScene(state, action);
  case Actions.DESELECT_CELL:
    return deselectCell(state, action);
  case Actions.FOCUS_CLIP:
    return focusClip(state, action);
  case Actions.FOCUS_SCENE:
    return focusScene(state, action);
  default:
    return state;
  }
};

export default selectionReducer;
