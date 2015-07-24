'use strict';

import React from 'react';
import EvilApp from './components/EvilApp';

import SongStore from './stores/SongStore';

let song = SongStore.getCurrentSong();

React.render(<EvilApp song={song} />, document.getElementById('app'));
