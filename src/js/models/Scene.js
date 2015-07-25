'use strict';

import ClipStore from '../stores/ClipStore';

class Scene {

  constructor (scene) {
    if (!scene) { throw 'scene required'; }

    this.uuid = scene.uuid;
    this.name = scene.name;
    this.setClips(scene.clips);
    this.setControls(scene.controls);
  }

  setClips (clipIds) {
    this.clips = clipIds.map(c => ClipStore.getClipFromID(c));
  }

  setControls (controls) {
    this.controls = controls;
  }

  toJSON () {
    return JSON.stringify({
      uuid     : this.uuid,
      name     : this.name,
      clipIds  : this.clips.map(c => c.uuid),
      controls : this.controls
    });
  }

}

export default Scene;
