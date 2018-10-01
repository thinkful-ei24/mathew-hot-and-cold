//Other than them using Game vs my Container, everything is the same.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './components/Container';
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
