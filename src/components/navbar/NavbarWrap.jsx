import React from 'react';

import style from './NavbarWrap.module.css';
import {NavLink} from "react-router-dom";

let NavbarData = [
    {elementName: 'Profile'},
    {elementName: 'Dialogs'},
    {elementName: 'Friends'},
    {elementName: 'Groups'},
    {elementName: 'Weather'}
]


const NavbarWrap = () => {

    let NavbarElements = NavbarData
        .map((element) => {

                const path = '/' + element.elementName;
                return (
                    <p><NavLink to={path}>{element.elementName}</NavLink></p>
                )
            }
        )

    return (
        <div className={style.item}>
            {NavbarElements}
        </div>
    );
}

export default NavbarWrap;