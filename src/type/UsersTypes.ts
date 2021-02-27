export interface initUsersTypes{
    users: Array<UsersTypes>,
    currentPage: number,
    totalCountUsers: number,
    pageSize: number,
    isFetching: boolean,
    disableButton: any[]
}
export interface UsersTypes{
    id: number,
    name: string,
    status: string,
    photos: {
        small: null | string,
        large: null | string
    },
    followed: boolean
}
export enum listActionTypes{
    Follow = 'FOLLOW',
    UnFollow = 'UNFOLLOW',
    setUser = 'SETUSERS',
    SetPageUsers = 'SETPAGEUSERS',
    Fetching = 'ISFETCHING',
    disableInProgressFollow = 'disableInProgressFollow'
}
export interface FollowActionCreatorType{
    type: listActionTypes.Follow,
    userId: number
}
export interface UnFollowActionCreatorType{
    type: listActionTypes.UnFollow,
    userId: number
}
export interface setUsersActionCreatorType{
    type: listActionTypes.setUser,
    users: any[],
    count: number
}
export interface pageUsersActionCreatorType{
    type: listActionTypes.SetPageUsers,
    page: number
}
export interface toggleIsFetchingActionCreatorType{
    type: listActionTypes.Fetching,
    flag: boolean
}
export interface toggleIsGetDataFollowsActionCreatorType{
    type: listActionTypes.disableInProgressFollow,
    flag: boolean,
    buttonId: number
}
export type ActionType =
    FollowActionCreatorType
    | UnFollowActionCreatorType
    | setUsersActionCreatorType
    | pageUsersActionCreatorType
    | toggleIsFetchingActionCreatorType
    | toggleIsGetDataFollowsActionCreatorType
