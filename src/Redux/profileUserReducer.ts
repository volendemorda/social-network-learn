import { profileAPI } from "../../src/components/API/profileAPI"
import {
  InitialState,
  listActionTypes,
  ProfileType,
} from "../type/ProfileTypes"
import { ThunkDispatchType, ThunkType } from "../type/ThunkType"
import { inferActionType } from "./redux-store"

const initState: InitialState = {
  status: null,
  profile: null,
  error: "",
}
export const userProfileReducer = (
  state = initState,
  action: ActionType
): InitialState => {
  switch (action.type) {
    case listActionTypes.setProfile:
      return {
        ...state,
        profile: action.profile,
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
          photos: action.photo,
        } as any,
      }
    case listActionTypes.setError:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

type ActionType = inferActionType<typeof ProfileAction>
export const ProfileAction = {
  setProfileAC: (profile: ProfileType) =>
    ({
      type: listActionTypes.setProfile,
      profile,
    } as const),
  setStatusAC: (status: string | null) =>
    ({
      type: listActionTypes.setStatus,
      status,
    } as const),
  toggleFetchingAC: (isFetchind: boolean) =>
    ({
      type: listActionTypes.toggleFetching,
      isFetchind,
    } as const),
  setPhotoAC: (photo: File) =>
    ({
      type: listActionTypes.setPhoto,
      photo,
    } as const),
  setError: (error: string) => ({
    type: listActionTypes.setError,
    error,
  } as const),
}

// thunkCreator
export const getProfileThunkCreator = (id: number): ThunkType => {
  return async (dispatch: ThunkDispatchType) => {
    try {
      const data = await profileAPI.getProfileUser(id)
      dispatch(ProfileAction.setProfileAC(data.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const ProfileStatusThunkCreator = (id: number): ThunkType => {
  return async (dispatch: ThunkDispatchType) => {
    try {
      const data = await profileAPI.getStatus(id)
      dispatch(ProfileAction.setStatusAC(data.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const updateProfileStatusThunkCreator = (
  status: string | null
): ThunkType => {
  return async (dispatch: ThunkDispatchType) => {
    try {
      const data = await profileAPI.updateStatus(status)
      if (data.data.resultCode === 0) {
        dispatch(ProfileAction.setStatusAC(status))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export const updatePhotoThunkCreator = (photo: File): ThunkType => {
  return async (dispatch: ThunkDispatchType) => {
    try {
      const data = await profileAPI.updatePhoto(photo)
      if (data.data.resultCode === 0) {
        dispatch(ProfileAction.setPhotoAC(data.data.data.photos))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
