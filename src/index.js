//Other than them using Game vs my Container, everything is the same.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/game';
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
