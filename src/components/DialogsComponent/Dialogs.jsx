import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

let DialogsData = [
    {id: 1, name: 'Valera', message: "Hi, im Valera"},
    {id: 2, name: 'Kate', message: "Hi, im Kate"},
    {id: 3, name: 'John', message: "Hi, im John"},
    {id: 4, name: 'Margo', message: "Hi, im Margo"},
]

let DialogsElements = DialogsData
    .map(
        (element) => {

            const path = "/Dialogs/" + element.id;
            return (
                <p><NavLink to={path}>{element.name}</NavLink></p>
            )
        }
    )

let DialogsMessage = DialogsData
    .map(
        (element) => {
            return (
                <p>{element.message}</p>
            )
        }
    )

const Dialog = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    {DialogsElements}
                </div>
                <div className="col-md-6">
                    {DialogsMessage}
                </div>
            </div>
        </div>
    )

}

const Dialogs = () => {
    return (
        <div className={style.item}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Dialogs</h4>
                        <Dialog/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;