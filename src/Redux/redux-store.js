import {applyMiddleware, combineReducers, createStore} from "redux";
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
const store = createStore(reducers,applyMiddleware(thunkMiddleware))

window.state = store.getState()
export default store