import React from 'react';

import style from './NavbarWrap.module.css';
import {NavLink} from "react-router-dom";

const NavbarWrap = (props) => {

    let NavbarElements = props.navbarData.map((element) => {

                const path = '/' + element.elementName;
                return (
                    <span className={element.elementName} key={element.id}><NavLink to={path}>{element.elementName}</NavLink></span>
                )
            }
        );

    return (
        <div className={'NavbarContainer'}>
            {NavbarElements}
        </div>
    );
};

export default NavbarWrap;