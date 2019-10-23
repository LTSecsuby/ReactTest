import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import {combineReducers, createStore} from "redux";
import groupsDataReducer from "./store-management/groupsDataReducer";
import widgetWeatherDataReducer from "./store-management/widgetWeatherDataReducer";
import {Provider} from "react-redux";
import navbarReducer from "./store-management/navbarReducer";


let reducers = combineReducers({
    groupsPage: groupsDataReducer,
    navbarPage: navbarReducer,
    widgetWeatherPage: widgetWeatherDataReducer
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
