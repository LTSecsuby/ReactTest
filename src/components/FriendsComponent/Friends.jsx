import React from 'react';
import style from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) => {

    let friendsElements = props.friendsData.friendsElement.map((element) => {

            const path = '/Friends/' + element.nameFriend + element.surnameFriend;
            return (
                <div>
                    <img src={element.avatar} alt="avatar"/>
                    <span key={element.id}><NavLink to={path}>{element.nameFriend} {element.surnameFriend}</NavLink></span>
                </div>
            )
        }
    );

    return (
        <div className={style.item}>
            {friendsElements}
        </div>
    );

};

export default Friends;