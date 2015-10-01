'use strict';

const Actions = {
  SELECT_CLIP      : 'CLIP:SELECT_CLIP',
  SET_CLIP_NAME    : 'CLIP:SET_CLIP_NAME',
  CLIP_SELECTED    : 'CLIP:CLIP_SELECTED',
  UPDATE_CLIP_MIDI : 'CLIP:UPDATE_CLIP_MIDI',
};

const DEFAULT_CLIP = {
  entities : { clips : {} },
};

const DEMO_CLIP = {
  entities : {
    notes : {
      aaa0 : {
        uuid : 'aaa0',
        on   : { time : 0x0000, data : [0x90, 64, 127] },
        off  : { time : 0x00FF, data : [0x80, 64, 127] },
      },
      aaa1 : {
        uuid : 'aaa1',
        on   : { time : 0x0100, data : [0x90, 68, 127] },
        off  : { time : 0x01FF, data : [0x80, 68, 127] },
      },
      aaa2 : {
        uuid : 'aaa2',
        on   : { time : 0x0200, data : [0x90, 71, 127] },
        off  : { time : 0x02FF, data : [0x80, 71, 127] },
      },
      aaa3 : {
        uuid : 'aaa3',
        on   : { time : 0x0300, data : [0x90, 76, 127] },
        off  : { time : 0x03FF, data : [0x80, 76, 127] },
      },
      bbb0 : {
        uuid : 'bbb0',
        on   : { time : 0x0000, data : [0x90, 64, 127] },
        off  : { time : 0x00FF, data : [0x80, 64, 127] },
      },
      bbb1 : {
        uuid : 'bbb1',
        on   : { time : 0x0100, data : [0x90, 68, 127] },
        off  : { time : 0x01FF, data : [0x80, 68, 127] },
      },
      bbb2 : {
        uuid : 'bbb2',
        on   : { time : 0x0200, data : [0x90, 71, 127] },
        off  : { time : 0x02FF, data : [0x80, 71, 127] },
      },
      bbb3 : {
        uuid : 'bbb3',
        on   : { time : 0x0300, data : [0x90, 76, 127] },
        off  : { time : 0x03FF, data : [0x80, 76, 127] },
      },
      ccc0 : {
        uuid : 'ccc0',
        on   : { time : 0x0000, data : [0x90, 52, 127] },
        off  : { time : 0x00FF, data : [0x80, 52, 127] },
      },
      ccc1 : {
        uuid : 'ccc1',
        on   : { time : 0x0100, data : [0x90, 56, 127] },
        off  : { time : 0x01FF, data : [0x80, 56, 127] },
      },
      ccc2 : {
        uuid : 'ccc2',
        on   : { time : 0x0200, data : [0x90, 59, 127] },
        off  : { time : 0x02FF, data : [0x80, 59, 127] },
      },
      ccc3 : {
        uuid : 'ccc3',
        on   : { time : 0x0300, data : [0x90, 64, 127] },
        off  : { time : 0x03FF, data : [0x80, 64, 127] },
      },
      ddd0 : {
        uuid : 'ddd0',
        on   : { time : 0x0000, data : [0x90, 52, 127] },
        off  : { time : 0x00FF, data : [0x80, 52, 127] },
      },
      ddd1 : {
        uuid : 'ddd1',
        on   : { time : 0x0100, data : [0x90, 56, 127] },
        off  : { time : 0x01FF, data : [0x80, 56, 127] },
      },
      ddd2 : {
        uuid : 'ddd2',
        on   : { time : 0x0200, data : [0x90, 59, 127] },
        off  : { time : 0x02FF, data : [0x80, 59, 127] },
      },
      ddd3 : {
        uuid : 'ddd3',
        on   : { time : 0x0300, data : [0x90, 64, 127] },
        off  : { time : 0x03FF, data : [0x80, 64, 127] },
      },
    },
    clips : {
      aaa : {
        uuid     : 'aaa',
        name     : 'clips1-1',
        color    : '#FF0000',
        noteIds  : ['aaa0', 'aaa1', 'aaa2', 'aaa3'],
        start    : [1, 1, 1],
        end      : [3, 1, 1],
        position : [1, 1, 1],
        length   : [2, 0, 0],
      },
      bbb : {
        uuid     : 'bbb',
        name     : 'clips1-2',
        color    : '#FFFF00',
        noteIds  : ['bbb0', 'bbb1', 'bbb2', 'bbb3'],
        start    : [1, 1, 1],
        end      : [3, 1, 1],
        position : [1, 1, 1],
        length   : [2, 0, 0],
      },
      ccc : {
        uuid     : 'ccc',
        name     : 'clips2-1',
        color    : '#FF00FF',
        noteIds  : ['ccc0', 'ccc1', 'ccc2', 'ccc3'],
        start    : [1, 1, 1],
        end      : [3, 1, 1],
        position : [1, 1, 1],
        length   : [2, 0, 0],
      },
      ddd : {
        uuid     : 'ddd',
        name     : 'clips2-2',
        color    : '#00FFFF',
        noteIds  : ['ddd0', 'ddd1', 'ddd2', 'ddd3'],
        start    : [1, 1, 1],
        end      : [3, 1, 1],
        position : [1, 1, 1],
        length   : [2, 0, 0],
      },
    },
  },
};

export default {
  Actions,
  DEFAULT_CLIP,
  DEMO_CLIP,
};
