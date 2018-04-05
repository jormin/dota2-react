import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import './css/app.css';
import './css/amazeui.min.css';
import './js/app.js';
import './App.css';
import Picture from './pages/picture';
import Video from './pages/video';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter history={this.history}>
        <div>
            <Route exact path='/' component={Picture}/>
            <Route exact path='/Video' component={Video}/>
        </div>
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
