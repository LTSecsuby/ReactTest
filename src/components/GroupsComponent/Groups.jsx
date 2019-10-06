import React from 'react';
import style from './Groups.module.css';
<<<<<<< HEAD
import {NavLink} from "react-router-dom";
import store from "../../store-management/store";
import {
    createAddGroupActiveToGroupsDataReducer, createAddPostGroupActiveToGroupsDataReducer,
    createSetTextGroupActiveToGroupsDataReducer, createSetTextPostGroupActiveToGroupsDataReducer
} from "../../store-management/groupsDataReducer";
=======
import {NavLink, Route} from "react-router-dom";
import {
    addGroupActionCreator,
    addPostGroupActiveCreator,
    setTextGroupActionCreator,
    setTextPostGroupActiveCreator
} from "../../store";
>>>>>>> a78690a6b29666cf8254d781b5cf35eb16bbb24c

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
<<<<<<< HEAD
        store.dispatch(createAddGroupActiveToGroupsDataReducer());
        store.dispatch(createSetTextGroupActiveToGroupsDataReducer(''));
=======
        props.store.dispatch(addGroupActionCreator());
        props.store.dispatch(setTextGroupActionCreator(''));
>>>>>>> a78690a6b29666cf8254d781b5cf35eb16bbb24c
    };

    let onGroupChange = () => {
        let nameGroups = newGroupElement.current.value;
<<<<<<< HEAD
        store.dispatch(createSetTextGroupActiveToGroupsDataReducer(nameGroups));
=======
        props.store.dispatch(setTextGroupActionCreator(nameGroups));
>>>>>>> a78690a6b29666cf8254d781b5cf35eb16bbb24c
    };

    let newPostElement = React.createRef();

    let addPosts = () => {
<<<<<<< HEAD
        store.dispatch(createAddPostGroupActiveToGroupsDataReducer());
        store.dispatch(createSetTextPostGroupActiveToGroupsDataReducer(''));
=======
        props.store.dispatch(addPostGroupActiveCreator());
        props.store.dispatch(setTextPostGroupActiveCreator(''));
>>>>>>> a78690a6b29666cf8254d781b5cf35eb16bbb24c
    };

    let onPostChange = () => {
        let textPosts = newPostElement.current.value;
<<<<<<< HEAD
        store.dispatch(createSetTextPostGroupActiveToGroupsDataReducer(textPosts));
=======
        props.store.dispatch(setTextPostGroupActiveCreator(textPosts));
>>>>>>> a78690a6b29666cf8254d781b5cf35eb16bbb24c
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