import { connect } from "react-redux"
import {
  followThunkCreator,
  UnfollowThunkCreator,
  getUsersThunkCreator
} from "../../Redux/usersReducer"
import Users from "./UsersClassComp"
import { profileAPI } from "./../API/profileAPI"
import { userAPI } from "./../API/UserAPI"
import { AppReducer} from "../../Redux/redux-store"


export type MapPropsType = ReturnType<typeof mapStateToProps>


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

export default connect(mapStateToProps, {
  followThunkCreator,
  UnfollowThunkCreator,
  getUsersThunkCreator,
  profileAPI,
  userAPI,
})(Users)  

