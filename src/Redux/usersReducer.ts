import { ThunkDispatchType } from "./../type/ThunkType"
import { userAPI } from "../components/API/UserAPI"
import {
  initUsersTypes,
  listActionTypes,
  UsersTypes,
} from "../type/UsersTypes"
import { ThunkType } from "../type/ThunkType"
import { inferActionType } from "./redux-store"

const initUsers: initUsersTypes = {
  users: [],
  currentPage: 1,
  totalCountUsers: 0,
  pageSize: 9,
  isFetching: false,
  disableButton: [],
}
export const usersReducer = (state = initUsers,action: ActionType): initUsersTypes => {
  switch (action.type) {
    case listActionTypes.Follow:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true,
            }
          }
          return u
        }),
      }
    case listActionTypes.UnFollow:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false,
            }
          }
          return u
        }),
      }
    case listActionTypes.setUser:
      return {
        ...state,
        users: [...action.users],
        totalCountUsers: action.count,
      }
    case listActionTypes.SetPageUsers:
      return {
        ...state,
        currentPage: action.page,
      }
    case listActionTypes.Fetching:
      return {
        ...state,
        isFetching: action.flag,
      }
    case listActionTypes.disableInProgressFollow:
      return {
        ...state,
        isFetching: action.flag,
        disableButton: action.flag
          ? [...state.disableButton, action.buttonId]
          : [...state.disableButton.filter((id) => id !== action.buttonId)],
      }
    default:
      return state
  }
}
type ActionType = inferActionType<typeof UserAction>

export const UserAction = {
  FollowActionCreator: (userId: number) => ({type: listActionTypes.Follow, userId} as const),
  UnFollowActionCreator: (userId: number) => ({type: listActionTypes.UnFollow, userId} as const),
  setUsersActionCreator: (users: UsersTypes[], count: number) =>
  ({type: listActionTypes.setUser, users, count} as const),
  pageUsersActionCreator: (page: number) => ({type: listActionTypes.SetPageUsers, page} as const),
  toggleIsFetchingActionCreator: (flag: boolean) => ({type: listActionTypes.Fetching, flag}as const),
  toggleIsGetDataFollowsActionCreator: (buttonId: number, flag: boolean) => ({
      type: listActionTypes.disableInProgressFollow,
      buttonId,
      flag,
  }as const),
}

// thunkCreator
export const getUsersThunkCreator = (CurrentPage: number,pageSize: number): ThunkType => {
  return async (dispatch: ThunkDispatchType) => {
    try {
      dispatch(UserAction.pageUsersActionCreator(CurrentPage))
      dispatch(UserAction.toggleIsFetchingActionCreator(true))
      const data = await userAPI.getUsers(CurrentPage, pageSize)
      dispatch(
        UserAction.setUsersActionCreator(data.data.items, data.data.totalCount)
      )
      dispatch(UserAction.toggleIsFetchingActionCreator(false))
    } catch (error) {
      console.log(error)
    }
  }
}
export const UnfollowThunkCreator = (id: number): ThunkType => {
  return async (dispatch: ThunkDispatchType) => {
    try {
      await dispatch(UserAction.toggleIsGetDataFollowsActionCreator(id, true))
      const data = await userAPI.unFollow(id)
      if (data.data.resultCode === 0) {
        dispatch(UserAction.UnFollowActionCreator(id))
        dispatch(UserAction.toggleIsGetDataFollowsActionCreator(id, false))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export const followThunkCreator = (id: number): ThunkType => {
  return async (dispatch: ThunkDispatchType) => {
    try {
      await dispatch(UserAction.toggleIsGetDataFollowsActionCreator(id, true))
      const data = await userAPI.follow(id)
      if (data.data.resultCode === 0) {
        dispatch(UserAction.FollowActionCreator(id))
        dispatch(UserAction.toggleIsGetDataFollowsActionCreator(id, false))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export default usersReducer
