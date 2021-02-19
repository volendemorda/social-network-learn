import { profileAPI } from "../components/Users/API"

const setProfile = "setProfile"
const setStatus = "setStatus"
const toggleFetching = "toggleFetching"
const setPhoto = "setPhoto"

const initState = {
  status: null,
  profile: null,
}
export const userProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case setProfile:
      return {
        ...state,
        profile: action.profile,
      }
    case setStatus:
      return {
        ...state,
        status: action.status,
      }
    case setPhoto:
      debugger
      return{
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos
        }
      }
    default:
      return state
  }
}

export const setProfileAC = (profile) => {
  return {
    type: setProfile,
    profile,
  }
}
export const setStatusAC = (status) => {
  return {
    type: setStatus,
    status,
  }
}
export const toggleFetchingAC = (isFetchind) => {
  return {
    type: toggleFetching,
    isFetchind,
  }
}
export const setPhotoAC = (photos)=>{
  debugger
  return{
    type: setPhoto,
    photos
  }
}
// thunkCreator
export const getProfileThunkCreator = (id) => {
  return async dispatch => {
    try {
      const data = await profileAPI.getProfileUser(id)
      dispatch(setProfileAC(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const ProfileStatusThunkCreator = (id) => {
  return async dispatch => {
    try {
      const data = await profileAPI.getStatus(id)
      dispatch(setStatusAC(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateProfileStatusThunkCreator = (status) => {
  return async dispatch => {
    try {
      const data = await profileAPI.updateStatus(status)
      if (data.resultCode === 0) {
        dispatch(setStatusAC(status))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export const updatePhotoThunkCreator = (photo) =>{
  return async dispatch=>{
    try{
      debugger
      const data = await profileAPI.updatePhoto(photo)
      if (data.data.resultCode === 0) {
        dispatch(setPhotoAC(data.data.data.photos))
      } 
    } catch (error) {
      console.log(error);
    }
  }
}