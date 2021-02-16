import React from 'react'
import {connect} from "react-redux";
import {
    FollowActionCreator, followThunkCreator, getUsersThunkCreator,
    pageUsersActionCreator,
    setUsersActionCreator, toggleIsFetchingActionCreator, toggleIsGetDataFollowsActionCreator,
    UnFollowActionCreator, UnfollowThunkCreator
} from "../../Redux/usersReducer";
import Users from "./UsersClassComp";
import {profileAPI, userAPI} from "./API";

const mapStateToProps = (state)=>{
    return{
        UsersPage: state.UsersPage.users,
        CurrentPage: state.UsersPage.currentPage,
        totalCountUsers: state.UsersPage.totalCountUsers,
        pageSize: state.UsersPage.pageSize,
        isFetching: state.UsersPage.isFetching,
        disableButton: state.UsersPage.disableButton

    }
}

const UsersContainer = connect(mapStateToProps,{
    FollowActionCreator,
    UnFollowActionCreator,
    setUsersActionCreator,
    pageUsersActionCreator,
    toggleIsFetchingActionCreator,
    toggleIsGetDataFollowsActionCreator,
    getUsersThunkCreator,
    followThunkCreator,
    UnfollowThunkCreator,
    profileAPI,
    userAPI,
})(Users)
export default UsersContainer

