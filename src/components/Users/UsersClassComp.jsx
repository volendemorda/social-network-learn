import React from "react";
import "../Users/users.css";
import UserAPI from "./UsersAPI";
import Proloader from "./proloader/proloader";

class Users extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.CurrentPage,
      this.props.pageSize
    );
  }
  onChangedPage = (item) => {
    this.props.pageUsersActionCreator(item);
    this.props.getUsersThunkCreator(item, this.props.pageSize);
  };
  render() {    
    return (
      <div>
        {this.props.isFetching === true ? <Proloader /> : null}
        <UserAPI
          {...this.props}
          onChangedPage={this.onChangedPage}
          isGetDataFollow={this.props.isGetDataFollow}
        />
      </div>
    );
  }
}

export default Users;
