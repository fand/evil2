import { Actions } from '../CONST';

const selectClip = (clipId) => ({
  type : Actions.SELECT_CLIP,
  clipId,
});

const deselectClip = (clipId) => ({
  type : Actions.DESELECT_CLIP,
  clipId,
});

const selectScene = (sceneId) => ({
  type : Actions.SELECT_SCENE,
  sceneId,
});

const deselectScene = (sceneId) => ({
  type : Actions.DESELECT_SCENE,
  sceneId,
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
  deselectClip,
  deselectScene,
  focusClip,
  focusScene,
};
