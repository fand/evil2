'use strict';

import uuid from 'uuid';

export default class Note {
  constructor (opts) {
    this.uuid = opts.uuid || uuid.v4();
    this.on   = opts.on;
    this.off  = opts.off;
  }



}
