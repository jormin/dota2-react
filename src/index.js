import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom'
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
        <Switch>
            <Route exact path='/' component={Index}/>
            <Route exact path='/picture' component={Picture}/>
            <Route exact path='/video' component={Video}/>
            <Route component={NotFound} />
        </Switch>
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
