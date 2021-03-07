import { UserAction } from './../../Redux/usersReducer';
import { connect } from "react-redux"
import {
  followThunkCreator,
  UnfollowThunkCreator,
  getUsersThunkCreator
} from "../../Redux/usersReducer"
import Users from "./UsersClassComp"
import { profileAPI } from "./../API/profileAPI"
import { userAPI } from "./../API/UserAPI"
import { AppReducer } from "../../Redux/redux-store"


const mapStateToProps = (state: AppReducer) => {
  return {
    UsersPage: state.UsersPage.users,
    CurrentPage: state.UsersPage.currentPage,
    totalCountUsers: state.UsersPage.totalCountUsers,
    pageSize: state.UsersPage.pageSize,
    isFetching: state.UsersPage.isFetching,
    disableButton: state.UsersPage.disableButton,
  }
}

const UsersContainer = connect(mapStateToProps, {
  followThunkCreator,
  UnfollowThunkCreator,
  getUsersThunkCreator,
  profileAPI,
  userAPI,
})(Users)
export default UsersContainer
