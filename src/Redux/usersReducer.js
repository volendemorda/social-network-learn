import {userAPI} from "../components/Users/API";

const Follow = 'FOLLOW'
const UnFollow = 'UNFOLLOW'
const setUser = 'SETUSERS'
const SetPageUsers = 'SETPAGEUSERS'
const Fetching = 'ISFETCHING'
const isGetDataFollows = 'isGetDataFollows'
const initUsers = {
    users:[],
    currentPage: 1,
    totalCountUsers: 100,
    pageSize: 9,
    isFetching: false,
    isGetDataFollow: []
}
export const usersReducer = (state = initUsers, action)=>{
    switch (action.type){
        case Follow:
          return {
              ...state,
              users: state.users.map(u=>{
                  if (u.id === action.userId){
                     return {
                         ...u,
                         followed: true
                         
                     }
                  }
                  return u
              })
          }
        case UnFollow:
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId){
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            }
        case setUser:
            return {
                ...state,
                users: [...action.users]
            }
        case SetPageUsers:
            return {
                ...state,
                currentPage: action.page
            }
        case Fetching:
            return {
                ...state,
                isFetching: action.flag
            }
        case isGetDataFollows:
            return {
                ...state,
                isGetDataFollows: [...state.isGetDataFollow,action.id]
            }
        default:
            return state
    }
}

export const FollowActionCreator = (userId)=>{
    return{
        type:Follow,
        userId
    }
}
export const UnFollowActionCreator = (userId)=> {
    return {
        type: UnFollow,
        userId
    }
}
export const setUsersActionCreator = (users)=>{
    return{
        type: setUser,
        users,

    }
}
export const pageUsersActionCreator = (page)=>{
    return{
        type: SetPageUsers,
        page
    }
}
export const toggleIsFetchingActionCreator = (flag)=>{
    return{
        type: Fetching,
        flag
    }
}
export const toggleIsGetDataFollowsActionCreator = (id)=>{
    return{
        type: isGetDataFollows,
        id
    }
}

export const getUsersThunkCreator = (CurrentPage, pageSize)=>{
    return dispatch=>{
        dispatch(toggleIsFetchingActionCreator(true))
        userAPI.getUsers(CurrentPage, pageSize)
            .then(data=>{
                dispatch(setUsersActionCreator(data.items))
                dispatch(toggleIsFetchingActionCreator(false))
            })
    }
}
export const UnfollowThunkCreator = (id)=>{
    return dispatch=>{
        dispatch(toggleIsFetchingActionCreator(true))
        userAPI.unFollow(id)
            .then(data=>{
                if (data.resultCode === 0){
                    dispatch(UnFollowActionCreator(id))
                    dispatch(toggleIsFetchingActionCreator(false))
                }
            })
    }
}
export const followThunkCreator = (id)=>{
    return dispatch=>{
        dispatch(toggleIsFetchingActionCreator(true))
        dispatch(toggleIsGetDataFollowsActionCreator(id))
        userAPI.follow(id)
            .then(data=> {
                if (data.resultCode === 0) {
                    dispatch(FollowActionCreator(id))
                    dispatch(toggleIsFetchingActionCreator(false))
                }
            })
    }
}
export default usersReducer