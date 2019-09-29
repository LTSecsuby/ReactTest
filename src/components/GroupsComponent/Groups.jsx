import React from 'react';
import style from './Groups.module.css';
import {NavLink, Route} from "react-router-dom";


const Groups = (props) => {

    const groupItems = props.store.getState().groupsData.groupElement.map(
        (element) => {

            const path = '/Groups/' + element.elementName;
            return (
                <p><NavLink to={path}>{element.elementName}</NavLink></p>
            )
        }
    );

    const groupMsg = props.store.getState().groupsData.groupPosts.map(
        (element) => {

            if (window.location.pathname === '/Groups/' + element.groupElement) {
                return (
                    <p>{element.msg}</p>
                )
            }
        }
    );

    let newGroupElement = React.createRef();

    let addGroups = () => {
        props.store.addGroup();
        props.store.setTextGroup('');
    };

    let onGroupChange = () => {
        let nameGroups = newGroupElement.current.value;
        props.store.setTextGroup(nameGroups);
    };

    let newPostElement = React.createRef();

    let addPosts = () => {
        props.store.addPostGroup();
        props.store.setTextPostGroup('');
    };

    let onPostChange = () => {
        let textPosts = newPostElement.current.value;
        props.store.setTextPostGroup(textPosts);
    };




    return (
        <div className={style.item}>

            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-2">
                        <h4>Groups</h4>
                        {groupItems}
                        <textarea onChange={onGroupChange} ref={newGroupElement} value={props.store.getState().groupsData.nameGroupText}/>
                        <p><button onClick={addGroups}>Push</button></p>
                    </div>
                    <div className="col-6 col-lg-8">
                        <h4>Group chat</h4>
                        {groupMsg}
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.store.getState().groupsData.textGroupPost}/>
                        <p><button onClick={addPosts}>Push</button></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Groups;