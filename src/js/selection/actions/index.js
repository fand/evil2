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

const deselectCell = () => ({
  type : Actions.DESELECT_CELL,
  cellId,
});

const deselectAllClips = () => ({
  type : Actions.DESELECT_ALL_CLIPS,
});

const deselectAllScenes = () => ({
  type : Actions.DESELECT_ALL_SCENES,
});

const deselectAllCells = (sceneId) => ({
  type : Actions.DESELECT_ALL_CELLS,
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
  deselectAllClips,
  deselectAllScenes,
  deselectAllCells,
  focusClip,
  focusScene,
};
