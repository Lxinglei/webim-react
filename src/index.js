import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.less';
import App from './App';
import AccountRegister from './screen/register/AccountRegister';
import registerServiceWorker from './registerServiceWorker';
import PhoneRegister from "./screen/register/PhoneRegister";
import AccountLogin from "./screen/login/AccountLogin";
import PhoneLogin from "./screen/login/PhoneLogin";
import Main from "./screen/main/index";
import Chat from "./screen/chat/Chat";
if(/Android [4-6]/.test(navigator.appVersion)) {
    window.addEventListener("resize", function() {
        if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
            window.setTimeout(function() {
                document.activeElement.scrollIntoViewIfNeeded();
            },0);
        }
    })
}
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/register/account" component={AccountRegister}/>
            <Route exact path="/register/phone" component={PhoneRegister}/>
            <Route exact path="/login/account" component={AccountLogin}/>
            <Route exact path="/login/phone" component={PhoneLogin}/>
            <Route exact path="/main" component={Main}/>
            <Route exact path="/chat" component={Chat}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
