import { ThunkDispatchType } from './../type/ThunkType';
import { authAPI } from "../components/API/authAPI"
import {InitialState, listActionType} from "../type/SidebarTypes";
import { ThunkType } from "../type/ThunkType";
import { inferActionType } from "./redux-store";
import { ProfileType } from '../type/ProfileTypes';
import { profileAPI } from '../components/API/profileAPI';



const initState: InitialState = {
  profile: null
}

export const sidebarReducer = (state = initState, action:ActionType):InitialState => {
  switch (action.type) {
    case listActionType.setProfileUser:
      return {...state,...action.profile}
    default:
      return state
  }
}
type ActionType = inferActionType<typeof SidebarAction>
export const SidebarAction = {
  setProfileDataAC: (profile: ProfileType[]) => ({
      type: listActionType.setProfileUser,profile})
} 

// thunkCreator
export const setProfileDataThunkCreator = ():ThunkType=> {
  return async (dispatch: ThunkDispatchType) => {
    try {
      const data = await profileAPI.getProfileUser(14598)
      dispatch(SidebarAction.setProfileDataAC(data.data))
    } catch (error) {
      console.log(error)
    }
  }
}
export default sidebarReducer
