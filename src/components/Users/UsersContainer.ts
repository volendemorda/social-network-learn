import React from 'react'
import {connect} from "react-redux";
import {
    FollowActionCreator, followThunkCreator, getUsersThunkCreator,
    pageUsersActionCreator,
    setUsersActionCreator, toggleIsFetchingActionCreator, toggleIsGetDataFollowsActionCreator,
    UnFollowActionCreator, UnfollowThunkCreator
} from "../../Redux/usersReducer";
import Users from "./UsersClassComp";
import {profileAPI, userAPI} from "./../API/API";
import {AppReducer} from "../../Redux/redux-store";

const mapStateToProps = (state: AppReducer)=>{
    return{
        UsersPage: state.UsersPage.users,
        CurrentPage: state.UsersPage.currentPage,
        totalCountUsers: state.UsersPage.totalCountUsers,
        pageSize: state.UsersPage.pageSize,
        isFetching: state.UsersPage.isFetching,
        disableButton: state.UsersPage.disableButton
    }
}
interface mapStateToPropsType {
    CurrentPage: number,
    totalCountUsers: number,
    pageSize: number,
    isFetching: boolean,
    disableButton: number[]
}
interface  mapDispatchToPropsType{
    FollowActionCreator:  ()=>void,
    UnFollowActionCreator: ()=>void,
    setUsersActionCreator: (users: any[],count:number)=>void,
    getUsersThunkCreator: (currentPage:number,pageSize:number)=>void
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

