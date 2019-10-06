import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store-management/store";

let renderApp = (state) => {
    ReactDOM.render(<App state={state}/>, document.getElementById('root'));
};

renderApp(store.getState());

store.subscribe(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
