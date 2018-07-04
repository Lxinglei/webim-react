import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import './index.css';
import App from './App';
import AccountRegister from './screen/register/AccountRegister';
import registerServiceWorker from './registerServiceWorker';
import PhoneRegister from "./screen/register/PhoneRegister";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/register/account" component={AccountRegister}/>
            <Route exact path="/register/phone" component={PhoneRegister}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
