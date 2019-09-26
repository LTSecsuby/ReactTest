import ReactDOM from "react-dom";
import App from "./App";
import state, {addGroupElement, dialogsData, navbarData} from "./state";
import React from "react";



export let renderApp = () => {
    ReactDOM.render(<App addGroupElement={addGroupElement} dialogsData={dialogsData} state={state}
                         navbarData={navbarData}/>, document.getElementById('root'));
};