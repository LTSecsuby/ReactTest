import React from 'react';
import style from './Content2.module.css';
import {NavLink} from "react-router-dom";

const DialogContacts = (props) => {

    const path="/content2/" + props.id;

    return(
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const DialogMessage = (props) => {

    return(

        <div>
            message
        </div>
    )
}

const Dialog = () => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <DialogContacts name="Valera" id="1"/>
                    <DialogContacts name="Alex" id="2"/>
                    <DialogContacts name="Kate" id="3"/>
                    <DialogContacts name="Margo" id="4"/>
                </div>
                <div className="col-md-6">
                    <DialogMessage />
                </div>
            </div>
        </div>
    )

}

const Content2 = () => {
    return(
        <div className={style.item}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>CHAT</h2>
                        <Dialog/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content2;