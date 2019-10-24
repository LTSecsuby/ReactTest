import React from 'react';

import style from './Dialog.module.css';
import {NavLink, Route} from "react-router-dom";

const TempComp = (props) => {

    let DialogsMessage = props.dialogsData.map(
        (element) => {

            if (element.id === props.id) {
                return (
                    <div key={element.id}>{element.message}</div>
                )
            }

        }
    );

    return (
        <div>{DialogsMessage}</div>
    )
};


const Dialog = (props) => {

    let DialogsElements = props.dialogsData.map(
        (element) => {

            const path = "/Dialogs/" + element.id;
            return (
                <p key={element.id}><NavLink className={style.link} to={path}>{element.name}</NavLink></p>
            )
        }
    );

    let DialogsRoute = props.dialogsData.map(
        (element) => {

            return (
                <Route key={element.id} path={'/Dialogs/' + element.id}
                       render={() => <TempComp id={element.id} dialogsData={props.dialogsData}/>}/>
            )
        }
    );

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    {DialogsElements}
                </div>
                <div className="col-md-6">
                    { DialogsRoute }
                </div>
            </div>
        </div>
    )

};

export default Dialog;