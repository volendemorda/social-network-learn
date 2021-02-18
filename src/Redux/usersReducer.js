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
    totalCountUsers: 0,
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
                users: [...action.users],
                totalCountUsers: action.count
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
export const setUsersActionCreator = (users,count)=>{
    return{
        type: setUser,
        users,
        count

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

// thunkCreator
export const getUsersThunkCreator = (CurrentPage, pageSize)=>{
    return async dispatch=>{
       try{
            dispatch(toggleIsFetchingActionCreator(true))
            const data = await userAPI.getUsers(CurrentPage, pageSize)
            dispatch(setUsersActionCreator(data.items,data.totalCount))
            dispatch(toggleIsFetchingActionCreator(false))
       }
       catch(error){
           console.log(error)
       }
    }
}

export const UnfollowThunkCreator = (id)=>{
    return async dispatch=>{
        try{
            dispatch(toggleIsGetDataFollowsActionCreator(id,true))
            const data = await userAPI.unFollow(id)
            if (data.resultCode === 0){
                dispatch(UnFollowActionCreator(id))
                dispatch(toggleIsGetDataFollowsActionCreator(id,false))
            }
        }
        catch(error){
           console.log(error)
        }
    }
}
export const followThunkCreator = (id)=>{
    return async dispatch=>{
        try{
            dispatch(toggleIsGetDataFollowsActionCreator(id,true))
            const data = await userAPI.follow(id)
                if (data.resultCode === 0) {
                    dispatch(FollowActionCreator(id))
                    dispatch(toggleIsGetDataFollowsActionCreator(id,false))
                }
        }
        catch(error){
            console.log(error)
        }
    }
}
export default usersReducer