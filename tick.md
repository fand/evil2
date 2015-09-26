# TICK を発行してから音が出るまでの流れ

- TrackがTICKを受信
- Trackのclipから次のTickまでのMIDIを取得
- MIDIをTrackのDeviceActions.noteOnに送信
- deviceReducerが受信
- Deviceが音を鳴らすd
