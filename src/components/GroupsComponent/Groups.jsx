import React from 'react';
import style from './Groups.module.css';
import {NavLink} from "react-router-dom";
import store from "../../store-management/store";
import {
    createAddGroupActiveToGroupsDataReducer, createAddPostGroupActiveToGroupsDataReducer,
    createSetTextGroupActiveToGroupsDataReducer, createSetTextPostGroupActiveToGroupsDataReducer
} from "../../store-management/groupsDataReducer";

const Groups = (props) => {

    const groupItems = props.state.groupsData.groupElement.map(
        (element) => {

            const path = '/Groups/' + element.elementName;
            return (
                <p key={element.id}><NavLink to={path}>{element.elementName}</NavLink></p>
            )
        }
    );

    const groupMsg = props.state.groupsData.groupPosts.map(
        (element) => {

            if (window.location.pathname === '/Groups/' + element.groupElement) {
                return (
                    <p key={element.id}>{element.msg}</p>
                )
            }
        }
    );

    let newGroupElement = React.createRef();

    let addGroups = () => {

        store.dispatch(createAddGroupActiveToGroupsDataReducer());
        store.dispatch(createSetTextGroupActiveToGroupsDataReducer(''));

    };

    let onGroupChange = () => {
        let nameGroups = newGroupElement.current.value;
        store.dispatch(createSetTextGroupActiveToGroupsDataReducer(nameGroups));
    };

    let newPostElement = React.createRef();

    let addPosts = () => {
        store.dispatch(createAddPostGroupActiveToGroupsDataReducer());
        store.dispatch(createSetTextPostGroupActiveToGroupsDataReducer(''));
    };

    let onPostChange = () => {
        let textPosts = newPostElement.current.value;
        store.dispatch(createSetTextPostGroupActiveToGroupsDataReducer(textPosts));
    };


    return (
        <div className={style.item}>

            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-2">
                        <h4>Groups</h4>
                        {groupItems}
                        <textarea onChange={onGroupChange} ref={newGroupElement} value={props.state.groupsData.nameGroupText}/>
                        <p><button onClick={addGroups}>Push</button></p>
                    </div>
                    <div className="col-6 col-lg-8">
                        <h4>Group chat</h4>
                        {groupMsg}
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.state.groupsData.textGroupPost}/>
                        <p><button onClick={addPosts}>Push</button></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Groups;