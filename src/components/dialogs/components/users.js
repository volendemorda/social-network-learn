import React from 'react'
import {NavLink, Route} from "react-router-dom";
import style from './../dialog.module.css'
const User =(props)=>{
    return <NavLink to={`dialog/${props.id}`} activeClassName={style.active} className={style.link}>{props.name}</NavLink>
}

export default User