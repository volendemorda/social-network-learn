export interface initUsersTypes{
    users: Array<UsersTypes>,
    currentPage: number,
    totalCountUsers: number,
    pageSize: number,
    isFetching: boolean,
    disableButton: number[]
}
export interface UsersTypes{
    id: number,
    name: string,
    status: string | null,
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
