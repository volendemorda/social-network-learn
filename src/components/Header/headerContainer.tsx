import React from 'react';
import './headers.css'
import Header from "./header";
import {connect} from "react-redux";
import {authAC, getUserDataIsAuthThunkCreator} from "../../Redux/auth";
import {getAuthData, getEmailData, getLoginData} from "./reselect.header";
import {AppReducer} from "../../Redux/redux-store";

export interface propsType {
    getUserDataIsAuthThunkCreator: () => void
    isAuth: boolean
    email: string
    login: string
}

const HeaderContainer: React.FC<propsType> = (props) => {
    React.useEffect(() => {
        props.getUserDataIsAuthThunkCreator()
    }, [])
    return <Header {...props}/>
}

export const mapStateToProps = (state: AppReducer) => {
    return {
        isAuth: getAuthData(state),
        login: getLoginData(state),
        email: getEmailData(state)
    }
}

export default connect(mapStateToProps, {
    authAC,
    getUserDataIsAuthThunkCreator

})(HeaderContainer)



