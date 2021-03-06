import React from 'react';
import SidebarStyle from './sidebar.module.css'
import {NavLink} from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SettingsIcon from '@material-ui/icons/Settings';

interface PropsType{
  id:number
  login: string
  email: string
}

 const Sidebar: React.FC<PropsType>= ({id,login,email}) => {
   return (
     <aside className={SidebarStyle.sidebar}>
       <div className={SidebarStyle.container__sidebar}>
         <div className={SidebarStyle.container__flex}>
         <div className="photo__profile profile__photo"><img src="https://fs1.inspider.ru/photo/2013/03/28/a97d5cc5ca99fb659ff6522f95c92bc0.jpg" alt=""/><img src="" alt=""/></div>
          <div className={SidebarStyle.sidebar__title}>{login}</div>  
         </div>
         <nav className={SidebarStyle.sidebar__menu}>
           <ul className={SidebarStyle.sidebar__list}>
             <li>
               <NavLink to="/profile" activeClassName={SidebarStyle.active} className={SidebarStyle.sidebar__link} >
                <PersonIcon/> Профиль
               </NavLink>
             </li>
             <li>
               <NavLink to="/ChatPage" activeClassName={SidebarStyle.active} className={SidebarStyle.sidebar__link}>
                 <MessageIcon/> Чат
               </NavLink>
             </li>
             <li>
               <NavLink to="/posts" activeClassName={SidebarStyle.active} className={SidebarStyle.sidebar__link} >
                 <PostAddIcon/> Посты
               </NavLink>
             </li>

             <li>
               <NavLink to="/News" activeClassName={SidebarStyle.active} className={SidebarStyle.sidebar__link}>
                <SupervisedUserCircleIcon/> Друзья
               </NavLink>
             </li>
             <li>
               <NavLink to="/Settings" activeClassName={SidebarStyle.active} className={SidebarStyle.sidebar__link}>
                 <SettingsIcon/> Настройки
               </NavLink>
             </li>
           </ul>
         </nav>
       </div>
     </aside>
   );
 };
 export default Sidebar 