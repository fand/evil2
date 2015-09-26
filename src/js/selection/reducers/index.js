import CONST, { Actions } from '../CONST';

const selectClip = (state, action) => ({
  ...state,
  selectedClipIds : [...state.selectedClipIds, action.clipId],
});

const selectScene = (state, action) => {
  ...state,
  selectedSceneIds : [...state.selectedSceneIds, action.sceneId],
};

const deselectClip = (state, action) => {
  const newClipIds = state.selectedClipIds.filter(c => c !== action.clipId);
  return {
    ...state,
    selectedClipIds : [...newClipIds],
  }
});

const deselectScene = (state, action) => {
  const newSceneIds = state.selectedSceneIds.filter(c => c !== action.sceneId);
  return {
    ...state,
    selectedSceneIds : [...newSceneIds],
  }
};

const focusClip = (state, action) => {
  ...state,
  focusedClipId : action.clipId,
};

const focusScene = (state, action) => {
  ...state,
  focusedSceneId : action.sceneId,
};

const selectionReducer = (state=CONST.DEFAULT_SELECTION, action) => {
  switch (action.type) {
  case Actions.SELECT_CLIP:
    return selectClip(state, action);
  case Actions.SELECT_SCENE:
    return selectScene(state, action);
  case Actions.FOCUS_CLIP:
    return focusClip(state, action);
  case Actions.FOCUS_SCENE:
    return focusScene(state, action);
  }
};

export default selectionReducer;
