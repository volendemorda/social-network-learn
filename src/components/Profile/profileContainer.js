import React from 'react'
import {getProfile} from "./reselect.profile";
import {connect} from "react-redux";
import {ProfileThunkCreator} from "../../../Redux/profileUserReducer";
import {withRouter} from "react-router-dom";
import ProfileUserContainer from "./profileUserContainer";

const mapStateToProps = (state)=>{
    return{
        profile: getProfile(state)
    }
}
const profileRouter = withRouter(ProfileUserContainer)
export default connect(mapStateToProps,{
    ProfileThunkCreator
})(profileRouter)