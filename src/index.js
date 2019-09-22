import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    {id: 1, name: 'Valera', message: "Hi, im Valera"},
    {id: 2, name: 'Kate', message: "Hi, im Kate"},
    {id: 3, name: 'John', message: "Hi, im John"},
    {id: 4, name: 'Margo', message: "Hi, im Margo"}

];

let navbarData = [
    {elementName: 'Profile'},
    {elementName: 'Dialogs'},
    {elementName: 'Friends'},
    {elementName: 'Groups'},
    {elementName: 'Weather'}
];

ReactDOM.render(<App dialogsData={dialogsData} navbarData={navbarData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
