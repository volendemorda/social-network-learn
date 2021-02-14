import React from 'react';
import './headers.css'
import {NavLink} from "react-router-dom";

const Header = (props)=>{
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <a href="">Главная</a>
          </li>
          <li>
            <NavLink to="/users">Пользователи</NavLink>
          </li>
        </ul>
        <ul className="nav__list">
          <li>
            {props.isAuth
                ?  <span className="email">{props.email}</span>
                :   null
            }
          </li>
          <li>
            {props.isAuth
                ?  <NavLink to="/login">Выйти</NavLink>
                :   <NavLink to="/login">Войти</NavLink>
            }
          </li>
        </ul>
      </nav>
     
    </header>
  );
}

export default Header