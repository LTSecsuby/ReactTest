import ReactDOM from "react-dom";
import App from "./App";
import state, {addGroupElement, onGroupText, onPostText, addPostElement, dialogsData, navbarData} from "./state";
import React from "react";



export let renderApp = () => {
    ReactDOM.render(<App addGroupElement={addGroupElement} onGroupText={onGroupText} addPostElement={addPostElement} onPostText={onPostText} dialogsData={dialogsData} state={state}
                         navbarData={navbarData}/>, document.getElementById('root'));
};