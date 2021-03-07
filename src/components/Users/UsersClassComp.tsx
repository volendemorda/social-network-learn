import React from "react"
import "../Users/users.css"
import UserAPI from "./UsersPage"
import Proloader from "../../accecs/proloader/proloader"

interface PropsType {
  CurrentPage: number
  pageSize: number
  isFetching: boolean
  UserAction:{
    pageUsersActionCreator: (item: number) => void
  }
  getUsersThunkCreator: (item: number, pageSize: number) => void
  UnfollowThunkCreator: (id: number) => void
  followThunkCreator: (id: number) => void
}

class Users extends React.Component<PropsType> {
  componentDidMount() {
    
    this.props.getUsersThunkCreator(this.props.CurrentPage, this.props.pageSize)
  }
  onChangedPage = (item: number) => {
    this.props.getUsersThunkCreator(item,this.props.pageSize)
  }
  render() {
    return (
      <div>
        {this.props.isFetching === true ? <Proloader /> : null}
        <UserAPI {...this.props} onChangedPage={this.onChangedPage} />
      </div>
    )
  }
}

export default Users
