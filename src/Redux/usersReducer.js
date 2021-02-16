import {userAPI} from "../components/Users/API";

const Follow = 'FOLLOW'
const UnFollow = 'UNFOLLOW'
const setUser = 'SETUSERS'
const SetPageUsers = 'SETPAGEUSERS'
const Fetching = 'ISFETCHING'
const disableInProgressFollow = 'disableInProgressFollow'

const initUsers = {
    users:[],
    currentPage: 1,
    totalCountUsers: 100,
    pageSize: 9,
    isFetching: false,
    disableButton: []
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
        case disableInProgressFollow:
            debugger
            return {
                ...state,
                isFetching: action.flag,
                disableButton: action.flag 
                ? [...state.disableButton, action.buttonId] 
                : [state.disableButton.filter(id=> id!==action.buttonId)] 
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
export const toggleIsGetDataFollowsActionCreator = (buttonId,flag)=>{
    return{
        type: disableInProgressFollow,
        buttonId,
        flag
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
        dispatch(toggleIsGetDataFollowsActionCreator(id,true))
        userAPI.unFollow(id)
            .then(data=>{
                if (data.resultCode === 0){
                    dispatch(UnFollowActionCreator(id))
                    dispatch(toggleIsGetDataFollowsActionCreator(id,false))
                }
            })
    }
}
export const followThunkCreator = (id)=>{
    return dispatch=>{
        dispatch(toggleIsGetDataFollowsActionCreator(id,true))
        userAPI.follow(id)
            .then(data=> {
                if (data.resultCode === 0) {
                    console.log(id);
                    dispatch(FollowActionCreator(id))
                    dispatch(toggleIsGetDataFollowsActionCreator(id,false))
                }
            })
    }
}
export default usersReducer