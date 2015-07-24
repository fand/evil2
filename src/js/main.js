'use strict';

import React from 'react';
import EvilApp from './components/EvilApp';

import Song from './models/Song';

let song = new Song();

React.render(<EvilApp song={song} />, document.getElementById('app'));
