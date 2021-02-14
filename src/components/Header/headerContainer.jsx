import React from 'react';
import './headers.css'
import Header from "./header";
import {connect} from "react-redux";
import {authAC, getUserDataIsAuthThunkCreator} from "../../Redux/auth";
import {getAuthData, getEmailData, getLoginData} from "./reselect.header";


class HeaderContainer extends React.Component{
  componentDidMount() {
      this.props.getUserDataIsAuthThunkCreator()
  }
  render() {
        return <Header {...this.props}/>
  }
}

export const mapStateToProps=(state)=>{
    return{
        isAuth: getAuthData(state),
        login: getLoginData(state),
        email: getEmailData(state)
    }
}

export default connect(mapStateToProps,{
    authAC,
    getUserDataIsAuthThunkCreator

})(HeaderContainer)



