import { Actions } from '../CONST';

const selectClip = (clipId) => ({
  type : Actions.SELECT_CLIP,
  clipId,
});

const selectScene = (sceneId) => ({
  type : Actions.SELECT_SCENE,
  sceneId,
});

const selectCell = (cellId) => ({
  type : Actions.SELECT_CELL,
  cellId,
});

const deselectClip = (clipId) => ({
  type : Actions.DESELECT_CLIP,
  clipId,
});

const deselectScene = (sceneId) => ({
  type : Actions.DESELECT_SCENE,
  sceneId,
});

const deselectCell = (sceneId) => ({
  type : Actions.DESELECT_CELL,
  cellId,
});

const focusClip = (clipId) => ({
  type : Actions.FOCUS_CLIP,
  clipId,
});

const focusScene = (sceneId) => ({
  type : Actions.FOCUS_SCENE,
  sceneId,
});

export default {
  selectClip,
  selectScene,
  selectCell,
  deselectClip,
  deselectScene,
  deselectCell,
  focusClip,
  focusScene,
};
