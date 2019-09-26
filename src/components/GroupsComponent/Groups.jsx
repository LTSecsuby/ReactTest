import React from 'react';
import style from './Groups.module.css';
import {NavLink, Route} from "react-router-dom";
import {renderApp} from "../../StartApp";


const Groups = (props) => {

    const groupItems = props.state.groupsData.groupElement.map(
        (element) => {

            const path = '/Groups/' + element.elementName;
            return (
                <p><NavLink to={path}>{element.elementName}</NavLink></p>
            )
        }
    );

    let newGroupElement = React.createRef();
    let addGroups = () => {
        let nameGroups = newGroupElement.current.value;
        props.addGroupElement(nameGroups);
        renderApp();
    };


   /* const postsItem = props.state.groupsData.groupElement.map (

         (element) => {

             const path = '/Groups/' + element.elementName;

             return (
                 <p><Route path={path} render={<TempComp temp={}/>} /></p>
             )
         }



     );*/

    return (
        <div className={style.item}>

            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-2">
                        <h4>Groups</h4>
                        {groupItems}
                        <textarea ref={newGroupElement}></textarea>
                        <button onClick={addGroups}>Push</button>
                    </div>
                    <div className="col-6 col-lg-8">
                        <h4>Group chat</h4>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Groups;