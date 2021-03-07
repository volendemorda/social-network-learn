import React from 'react';
import {connect} from "react-redux";
import {getUserDataIsAuthThunkCreator,AuthAction} from "../../Redux/auth";
import {activeSidebar, getAuthData, getEmailData, getLoginData} from "./reselect.header";
import {AppReducer} from "../../Redux/redux-store";
import Header from "./header";


type PropsType = {
    getUserDataIsAuthThunkCreator: ()=> Promise<void>,
    isAuth: boolean,
    email: string,
    login: string, 
    isActive: boolean,
    activateSidebar: (flag: boolean)=>void
}

const HeaderContainer: React.FC<PropsType> = (props) => {
    React.useEffect(() => {
        props.getUserDataIsAuthThunkCreator()
    }, [])
    return <Header {...props}/>
}

export const mapStateToProps = (state: AppReducer) => {
    return {
        isAuth: getAuthData(state),
        login: getLoginData(state),
        email: getEmailData(state),
        isActive: activeSidebar(state)
    }
}

export default connect(mapStateToProps, {
    getUserDataIsAuthThunkCreator,
    activateSidebar: AuthAction.activateSidebar
})(HeaderContainer)



