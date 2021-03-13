import React from "react";
import UserProfile from "./profileUser";
import { withRouter,RouteComponentProps} from "react-router-dom";
import { connect } from "react-redux";
import {
  ProfileStatusThunkCreator,
  updateProfileStatusThunkCreator,
  getProfileThunkCreator,
  updatePhotoThunkCreator
} from "../../Redux/profileUserReducer";
import {Selector} from "./reselect.profile";
import { AppReducer } from "../../Redux/redux-store";

type PathParamsType = {
  userId: string
}
export type PropsType = RouteComponentProps<PathParamsType>

type DispatchType = {
  getProfileThunkCreator:(id: number) => Promise<void>
  ProfileStatusThunkCreator: (id: number) => Promise<void>
  updateProfileStatusThunkCreator: (status: string | null)=> Promise<void>
  updatePhotoThunkCreator: (photo: File)=> Promise<void>
}
export type mapPropsType = ReturnType<typeof mapStateToProps>

type BasePropsType = mapPropsType & DispatchType & PropsType

class ProfileUserContainer extends React.Component<BasePropsType>{
  refreshProfile(){
    let userId:number | null = +this.props.match.params.userId;
    if (!userId) {
      userId = 14598;
    }
    this.props.getProfileThunkCreator(userId);
    this.props.ProfileStatusThunkCreator(userId); 
  }
  componentDidMount() {
   this.refreshProfile()
  }
  componentDidUpdate(prevProps: BasePropsType,prevState:BasePropsType) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.refreshProfile()
  }
  render() { 
    return <UserProfile {...this.props} isOwner={!this.props.match.params.userId}/>
  }
}


const mapStateToProps = (state: AppReducer) => {
  return {
    profile: Selector.getProfile(state),
    status: Selector.getStatus(state),
    error: Selector.getError(state)
  };
};
  export default connect(mapStateToProps, {
  ProfileStatusThunkCreator,
  updateProfileStatusThunkCreator,
  getProfileThunkCreator,
  updatePhotoThunkCreator
})(withRouter(ProfileUserContainer));
