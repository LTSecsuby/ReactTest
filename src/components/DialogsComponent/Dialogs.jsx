import React from 'react';

import style from './Dialogs.module.css';
import Dialog from "./DialogComponent/Dialog";

const Dialogs = (props) => {
    return (
        <div className={style.item}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Dialogs</h4>
                        <Dialog dialogsData ={props.dialogsData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;