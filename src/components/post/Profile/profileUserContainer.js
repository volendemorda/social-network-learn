import React from "react";
import UserProfile from "./profileUser";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  ProfileStatusThunkCreator,
  updateProfileStatusThunkCreator,
  getProfileThunkCreator,
} from "../../../Redux/profileUserReducer";
import { getProfile, getStatus } from "./reselect.profile";

class ProfileUserContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14598;
    }
    this.props.getProfileThunkCreator(userId);
    this.props.ProfileStatusThunkCreator(userId);
  }
  render() {
    return <UserProfile {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    profile: getProfile(state),
    status: getStatus(state),
  };
};
export default connect(mapStateToProps, {
  ProfileStatusThunkCreator,
  updateProfileStatusThunkCreator,
  getProfileThunkCreator,
})(withRouter(ProfileUserContainer));
