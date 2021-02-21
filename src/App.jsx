import {Route} from 'react-router-dom';
import './App.css';
import './nullstyle.css'
import DialogsContainer from "./components/dialogs/dialogs.container";
import PostContainer from "./components/post/postContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/headerContainer";
import Login from "./components/Login/login";
import ProfileUserContainer from "./components/Profile/profileUserContainer";
import SidebarContainer from './components/Sidebar/sidebarContainer'
import SettingsProfileContainer from './components/Settings/SettingsProfileContainer'


const App = ()=>{
  return (
    <div className = "page" >
     <HeaderContainer/>
     <SidebarContainer />
     <div className="app-wrapper">
         <Route  path="/dialogs" render={() =>  <DialogsContainer/>}/>
         <Route path="/posts"  render={()=> <PostContainer/>}/>
         <Route path="/users"  render={()=> <UsersContainer/>}/>
         <Route path="/login" render={()=><Login/>}/>
         <Route path="/profile/:userId?" render={()=><ProfileUserContainer/>}/>
         <Route path="/Settings" render={()=> <SettingsProfileContainer/>}/>
     </div>
    </div>
  )
}
export default App;
