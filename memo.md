# 初期化手順

1. Song初期化
2. Env初期化
  - tracks初期化
  - 最初の再生環境を整える
    - ボタンを押したら再生できるように
3. User初期化
  -



# 必要なComponent

- SessionView
- ArrangeMentView
- ClipViewer
- Player
- Mixer

- DeviceView
- ClipView
- Pianoroll
- Sequencer

- LiveView

- SongInfoViewer

- Help


# Model定義

class Song {
    uuid   : UUID
    scenes : Array<Scene>
    arrangements : Array<Arrangement>
    clips  : Dict<Clip>
    miser  : Mixer
    info   : SongInfo

    // モードはlocalStorageに保存すれば充分
    // mode   : 'Session' | 'Arrangement'  
}

class SongInfo {
    songId : UUID
    userId : UUID
    title  : string
    artist : string
    created : Date
    updated : Date
}

class User {
  uuid : UUID

}

class Env {
    songId  : UUID
    devices : Array<Device>
    master  : MasterTrack
}

class Track {
    uuid   : UUID
    device : Device
}

class Device {
    id : UUID
}

class Scene {
    uuid     : UUID
    name     : string
    clipIds  : Array<Clip>
    controls : Array<ControlMIDI>
}

class ControlMIDI {

}

class NoteMIDI {

}

class Clip {
    notes : Array<NoteMIDI>
}

class Meta {

}
