import { profileAPI } from "../components/Users/API";

const setProfile = "setProfile";
const setStatus = "setStatus";
const toggleFetching = "toggleFetching"

const initState = {
  status: null,
  profile: null
};
export const userProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case setProfile:
      return {
        ...state,
        profile: action.profile,
      };
    case setStatus:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const setProfileAC = (profile) => {
  return {
    type: setProfile,
    profile,
  };
};
export const setStatusAC = (status) => {
  return {
    type: setStatus, 
    status,
  };
};
export const toggleFetchingAC = (isFetchind)=>{
  return{
    type: toggleFetching,
    isFetchind
  }
}

export const getProfileThunkCreator = (id) => (dispatch) => {
  profileAPI.getProfileUser(id).then((data) => {
    dispatch(setProfileAC(data));
  });
};

export const ProfileStatusThunkCreator = (id) => (dispatch) => {
  profileAPI.getStatus(id).then((data) => {
    dispatch(setStatusAC(data));
  });
};

export const updateProfileStatusThunkCreator =(status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  });
};

