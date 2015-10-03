'use strict';

import { Actions } from '../CONST';

const SelectionActions = {

  selectClip : (clipId) => ({
    type : Actions.SELECT_CLIP,
    clipId,
  }),

  selectScene : (sceneId) => ({
    type : Actions.SELECT_SCENE,
    sceneId,
  }),

  selectCell : (cellId) => ({
    type : Actions.SELECT_CELL,
    cellId,
  }),

  deselectClip : (clipId) => ({
    type : Actions.DESELECT_CLIP,
    clipId,
  }),

  deselectScene : (sceneId) => ({
    type : Actions.DESELECT_SCENE,
    sceneId,
  }),

  deselectCell : (cellId) => ({
    type : Actions.DESELECT_CELL,
    cellId,
  }),

  deselectAllClips : () => ({
    type : Actions.DESELECT_ALL_CLIPS,
  }),

  deselectAllScenes : () => ({
    type : Actions.DESELECT_ALL_SCENES,
  }),

  deselectAllCells : () => ({
    type : Actions.DESELECT_ALL_CELLS,
  }),

  focusClip : (clipId) => ({
    type : Actions.FOCUS_CLIP,
    clipId,
  }),

  focusScene : (sceneId) => ({
    type : Actions.FOCUS_SCENE,
    sceneId,
  }),

};

export default SelectionActions;
