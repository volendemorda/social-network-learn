import React from "react";
import UserProfile from "./profileUser";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  ProfileStatusThunkCreator,
  updateProfileStatusThunkCreator,
  getProfileThunkCreator,
  updatePhotoThunkCreator
} from "../../../Redux/profileUserReducer";
import {getProfile, getStatus } from "./reselect.profile";

class ProfileUserContainer extends React.Component {
  refreshProfile(){
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 14598;
    }
    this.props.getProfileThunkCreator(userId);
    this.props.ProfileStatusThunkCreator(userId);
  }
  componentDidMount() {
   this.refreshProfile()
  }
  componentDidUpdate(prevProps,prevState,snapShot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.refreshProfile()
  }
  render() { 
    return(
      <>
      <UserProfile {...this.props} isOwner={!this.props.match.params.userId}/>
      </>
    )
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
  updatePhotoThunkCreator
})(withRouter(ProfileUserContainer));
