import React from 'react';
import style from './Groups.module.css';
import {NavLink, Route} from "react-router-dom";


const Groups = (props) => {

    const groupItems = props.groupsData.map(

        (element) => {

            const path = '/Groups/' + element.elementName;
        return (
            <p><NavLink to={path}>{element.elementName}</NavLink></p>
                 )
        }
    );








   /* const postsItem = props.groupsData.elementName.posts.map (

        (element) => {

            const path = '/Groups/' + element.elementName;

            return (
                <p><Route path={path} render={<TempComp temp={element.posts}/>} /></p>
            )
        }



    );*/

    return(
        <div className={style.item}>

            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-2">
                        <h4>Groups</h4>
                        { groupItems }
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