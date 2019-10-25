import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import {combineReducers, createStore} from "redux";
import groupsDataReducer from "./reducers/groupsDataReducer";
import widgetWeatherDataReducer from "./reducers/widgetWeatherDataReducer";
import {Provider} from "react-redux";
import navbarDataReducer from "./reducers/navbarDataReducer";
import friendsDataReducer from "./reducers/friendsDataReducer";
import dialogsDataReducer from "./reducers/dialogsDataReducer";
import footerDataReducer from "./reducers/footerDataReducer";
import profileDataReducer from "./reducers/profileDataReducer";


let reducers = combineReducers({
    groupsPage: groupsDataReducer,
    navbarPage: navbarDataReducer,
    widgetWeatherPage: widgetWeatherDataReducer,
    friendsPage: friendsDataReducer,
    dialogsPage: dialogsDataReducer,
    footerPage: footerDataReducer,
    profilePage: profileDataReducer
});

let store = createStore(reducers);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
    , document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
