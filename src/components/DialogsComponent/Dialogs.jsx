import React from 'react';

import style from './Dialogs.module.css';
import Dialog from "./DialogComponent/Dialog";

const Dialogs = (props) => {
    return (
        <div className={style.item}>
            <h4>Dialogs</h4>
            <Dialog dialogsData ={props.dialogsData} />
        </div>
    );
};

export default Dialogs;