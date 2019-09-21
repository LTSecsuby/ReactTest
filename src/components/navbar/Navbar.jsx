import React from 'react';

import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <div className={style.item}>
            <p><NavLink to='/content'>Profile</NavLink></p>
            <p><NavLink to='/content2'>Chat</NavLink></p>
            <p><NavLink to="/content3">Contacts</NavLink></p>
            <p>Groups</p>
            <p><NavLink to='/widget'>Widget weather</NavLink></p>
        </div>
    );
}

export default Navbar;