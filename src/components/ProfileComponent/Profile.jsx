import React from 'react';
import style from './Profile.module.css';

const Profile = (props) => {
    let buttonEdit;
    let contextForm;

    if (props.profileData.boolContextForm === 'hide') {
        buttonEdit = <button onClick={props.unhideContextForm}>edit</button>;
    }
    if (props.profileData.boolContextForm === 'unhide') {
        buttonEdit = '';
        contextForm = <div className={'ContextForm'}><textarea rows="4" cols="35" value={props.profileData.textProfile} onChange={props.setTextContextForm}></textarea><p><button onClick={props.saveContextForm}>ok</button></p></div>
    }

    return (
        <div className={style.item}>
            <img
                src='data:image/jpeg;base64,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'/>
            <p className={'TextProfile'}>{props.profileData.textProfile}</p>
            {buttonEdit}
            {contextForm}
        </div>
    );
};

export default Profile;