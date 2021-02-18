import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import postReducer from "./postReducer";
import messageReducer from "./messageReducer";
import usersReducer from "./usersReducer";
import {authUserReducer} from "./auth";
import thunkMiddleware from 'redux-thunk'
import {userProfileReducer} from "./profileUserReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
    PostPage: postReducer,
    MessagePage: messageReducer,
    UsersPage: usersReducer,
    AuthPage: authUserReducer,
    ProfilePage: userProfileReducer,
    Sidebar: sidebarReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));
  
export default store