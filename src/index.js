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
import Root from "./Root";
import Welcome from "./App";

import {createStore} from "redux";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
let store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Root}/>
                <Route exact path="/welcome" component={Welcome}/>
                <Route exact path="/register/account" component={AccountRegister}/>
                <Route exact path="/register/phone" component={PhoneRegister}/>
                <Route exact path="/login/account" component={AccountLogin}/>
                <Route exact path="/login/phone" component={PhoneLogin}/>
                <Route exact path="/main" component={Main}/>
                <Route exact path="/chat" component={Chat}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
