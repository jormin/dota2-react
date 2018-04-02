import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import './css/amazeui.min.css';
import './js/app.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
