import { authAPI } from "../components/API/API"
import {InitialState, listActionType, setProfileDataACtype} from "../type/SidebarTypes";


type ActionType = setProfileDataACtype

const initState: InitialState = {
  id: null,
  email: null,
  login: null
}

export const sidebarReducer = (state = initState, action: ActionType):InitialState => {
  switch (action.type) {
    case listActionType.setProfileUser:
      return {...state,...action.data}
    default:
      return state
  }
}

const setProfileDataAC = (id: number | null, email: string | null, login: string | null):setProfileDataACtype => {
  return {
    type: listActionType.setProfileUser,
    data: {
      id,
      email,
      login,
    },
  }
}

// thunkCreator
export const setProfileDataThunkCreator = () => {
  return async (dispatch: any) => {
    try {
      const data = await authAPI.getUserAuth()
      if (data.data.resultCode === 0) {
        const { id, email, login } = data.data.data
        dispatch(setProfileDataAC(id, email, login))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export default sidebarReducer
