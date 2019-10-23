import React from 'react';
import style from './Groups.module.css';
import {NavLink} from "react-router-dom";

const Groups = (props) => {

    const groupItems = props.groupsData.groupElement.map(
        (element) => {
            const path = '/Groups/' + element.elementName;
            return (
                <p key={element.id}><NavLink to={path}>{element.elementName}</NavLink></p>
            )
        }
    );

    const groupMsg = props.groupsData.groupPosts.map(
        (element) => {
            if (window.location.pathname === '/Groups/' + element.groupElement) {
                return (
                    <p key={element.id}>{element.msg}</p>
                )
            }
        }
    );


    return (
        <div className={style.item}>

            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-2">
                        <h4>Groups</h4>
                        {groupItems}
                        <textarea onChange={props.onGroupChange} value={props.groupsData.nameGroupText}/>
                        <p><button onClick={props.addGroups}>Push</button></p>
                    </div>
                    <div className="col-6 col-lg-8">
                        <h4>Group chat</h4>
                        {groupMsg}
                        <textarea onChange={props.onPostChange} value={props.groupsData.textGroupPost}/>
                        <p><button onClick={props.addPosts}>Push</button></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Groups;