import { profileAPI } from "../../src/components/API/API"
import {
  ActionType,
  InitialState,
  listActionTypes, ProfileType, setPhotoACtype,
  setProfileACtype,
  setStatusACtype,
  toggleFetchingACtype
} from "../type/ProfileTypes";

const initState: InitialState = {
  status: null,
  profile: null,
}
export const userProfileReducer = (state = initState,action: ActionType): InitialState=> {
  switch (action.type) {
    case listActionTypes.setProfile:
      return {
        ...state,
        profile: action.profile
      }
    case listActionTypes.setStatus:
      return {
        ...state,
        status: action.status,
      }
    case listActionTypes.setPhoto:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photo
        } as any
      }
    default:
      return state
  }
}

export const setProfileAC = (profile: InitialState[]): setProfileACtype => {
  return {
    type: listActionTypes.setProfile,
    profile,
  }
}

export const setStatusAC = (status: string): setStatusACtype => {
  return {
    type: listActionTypes.setStatus,
    status,
  }
}
export const toggleFetchingAC = (isFetchind: boolean): toggleFetchingACtype => {
  return {
    type: listActionTypes.toggleFetching,
    isFetchind,
  }
}

export const setPhotoAC = (photo: string | null | any): setPhotoACtype => {
  return {
    type: listActionTypes.setPhoto,
    photo,
  }
}
// thunkCreator
export const getProfileThunkCreator = (id: number) => {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.getProfileUser(id)
      dispatch(setProfileAC(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const ProfileStatusThunkCreator = (id: number) => {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.getStatus(id)
      dispatch(setStatusAC(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateProfileStatusThunkCreator = (status: string) => {
  return async (dispatch: any) => {
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
export const updatePhotoThunkCreator = (photo: string) => {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.updatePhoto(photo)
      if (data.data.resultCode === 0) {
        dispatch(setPhotoAC(data.data.data.photos))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
