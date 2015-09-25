'use strict';

import uuid from 'uuid';

const Actions = {
  SELECT_CLIP      : Symbol(),
  SET_CLIP_NAME    : Symbol(),
  CLIP_SELECTED    : Symbol(),
  UPDATE_CLIP_MIDI : Symbol(),
};

const DEFAULT_CLIP = {
  entities : { clips : {} },
};

const DEMO_CLIP = {
  entities : {
    clips : {
      aaa: {
        uuid : 'aaa',
        name : 'clips1-1',
        color : '#FF0000',
        midi : [
          {uuid: uuid.v4(), time: 0x0000, data: [0x90, 64, 127]},
          {uuid: uuid.v4(), time: 0x00FF, data: [0x80, 64, 127]},
          {uuid: uuid.v4(), time: 0x0100, data: [0x90, 68, 127]},
          {uuid: uuid.v4(), time: 0x01FF, data: [0x80, 68, 127]},
          {uuid: uuid.v4(), time: 0x0200, data: [0x90, 71, 127]},
          {uuid: uuid.v4(), time: 0x02FF, data: [0x80, 71, 127]},
          {uuid: uuid.v4(), time: 0x0300, data: [0x90, 76, 127]},
          {uuid: uuid.v4(), time: 0x03FF, data: [0x80, 76, 127]},
        ],
        start    : [1,1,1],
        end      : [3,1,1],
        position : [1,1,1],
        length   : [2,0,0]
      },
      bbb : {
        uuid : 'bbb',
        name : 'clips1-2',
        color : '#FFFF00',
        midi : [
          {uuid: uuid.v4(), time: 0x0000, data: [0x90, 64, 127]},
          {uuid: uuid.v4(), time: 0x00FF, data: [0x80, 64, 127]},
          {uuid: uuid.v4(), time: 0x0100, data: [0x90, 68, 127]},
          {uuid: uuid.v4(), time: 0x01FF, data: [0x80, 68, 127]},
          {uuid: uuid.v4(), time: 0x0200, data: [0x90, 71, 127]},
          {uuid: uuid.v4(), time: 0x02FF, data: [0x80, 71, 127]},
          {uuid: uuid.v4(), time: 0x0300, data: [0x90, 76, 127]},
          {uuid: uuid.v4(), time: 0x03FF, data: [0x80, 76, 127]},
        ],
        start    : [1,1,1],
        end      : [3,1,1],
        position : [1,1,1],
        length   : [2,0,0]
      },
      ccc : {
        uuid : 'ccc',
        name : 'clips2-1',
        color : '#FF00FF',
        midi : [
          {uuid: uuid.v4(), time: 0x0000, data: [0x90, 52, 127]},
          {uuid: uuid.v4(), time: 0x00FF, data: [0x80, 52, 127]},
          {uuid: uuid.v4(), time: 0x0100, data: [0x90, 56, 127]},
          {uuid: uuid.v4(), time: 0x01FF, data: [0x80, 56, 127]},
          {uuid: uuid.v4(), time: 0x0200, data: [0x90, 59, 127]},
          {uuid: uuid.v4(), time: 0x02FF, data: [0x80, 59, 127]},
          {uuid: uuid.v4(), time: 0x0300, data: [0x90, 64, 127]},
          {uuid: uuid.v4(), time: 0x03FF, data: [0x80, 64, 127]},
        ],
        start    : [1,1,1],
        end      : [3,1,1],
        position : [1,1,1],
        length   : [2,0,0]
      },
      ddd : {
        uuid : 'ddd',
        name : 'clips2-2',
        color : '#00FFFF',
        midi : [
          {uuid: uuid.v4(), time: 0x0000, data: [0x90, 52, 127]},
          {uuid: uuid.v4(), time: 0x00FF, data: [0x80, 52, 127]},
          {uuid: uuid.v4(), time: 0x0100, data: [0x90, 56, 127]},
          {uuid: uuid.v4(), time: 0x01FF, data: [0x80, 56, 127]},
          {uuid: uuid.v4(), time: 0x0200, data: [0x90, 59, 127]},
          {uuid: uuid.v4(), time: 0x02FF, data: [0x80, 59, 127]},
          {uuid: uuid.v4(), time: 0x0300, data: [0x90, 64, 127]},
          {uuid: uuid.v4(), time: 0x03FF, data: [0x80, 64, 127]},
        ],
        start    : [1,1,1],
        end      : [3,1,1],
        position : [1,1,1],
        length   : [2,0,0]
      }
    },
  },
};

export default {
  Actions,
  DEFAULT_CLIP,
  DEMO_CLIP,
};
