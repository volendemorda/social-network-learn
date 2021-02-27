import React from "react";
import "../Users/users.css";
import UserAPI from "./UsersAPI";
import Proloader from "./proloader/proloader";
interface PropsType {
  CurrentPage: number,
  pageSize: number,
  isFetching: boolean,
  getUsersThunkCreator:(item:number,pageSize:number)=>void,
  pageUsersActionCreator:(item: number)=>void,
}
class Users extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.CurrentPage,
      this.props.pageSize
    )
  }
  onChangedPage = (item:number) => {
    this.props.pageUsersActionCreator(item);
    this.props.getUsersThunkCreator(item, this.props.pageSize);
  }
  render() {    

    return (
      <div>
        {this.props.isFetching === true ? <Proloader /> : null}
        <UserAPI
          {...this.props}
          onChangedPage={this.onChangedPage}
            // @ts-ignore
          isGetDataFollow={this.props.isGetDataFollow}
        />
      </div>
    )
  }
}

// @ts-ignore
export default Users;
