import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import './css/app.css';
import './css/amazeui.min.css';
import './js/app.js';
import './App.css';
import Index from './pages/index';
import Picture from './pages/picture';
import Video from './pages/video';
import NotFound from './pages/error/404';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter history={this.history}>
        <div>
            <Route exact path='/' component={Index}/>
            <Route exact path='/picture' component={Picture}/>
            <Route exact path='/video' component={Video}/>
            <Route exact path='*' component={NotFound}/>
        </div>
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
