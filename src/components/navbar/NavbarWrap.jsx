import React from 'react';

import style from './NavbarWrap.module.css';
import {NavLink} from "react-router-dom";

const NavbarWrap = (props) => {

    let NavbarElements = props.state.navbarData.map((element) => {

                const path = '/' + element.elementName;
                return (
                    <p key={element.id}><NavLink to={path}>{element.elementName}</NavLink></p>
                )
            }
        );

    return (
        <div className={style.item}>
            {NavbarElements}
        </div>
    );
};

export default NavbarWrap;