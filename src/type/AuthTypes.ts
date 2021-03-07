export enum authActionTypes {
    getAuth = 'getAuth',
    errorData = 'errorData',
    ActivateSidebar ='ActivateSidebar'

}
export interface initAuthStateTypes {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
    error: null | string
    isActive: boolean
}
