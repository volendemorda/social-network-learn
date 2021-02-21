export enum authActionTypes {
    getAuth = 'getAuth',
    errorData = 'errorData'
}
export interface initAuthStateTypes {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
    error: null | string
}
export interface authACtype {
    type: authActionTypes.getAuth,
    data:{
        id: null | number,
        email: null | string,
        login: null | string
    }
}
export interface errorACtype {
    type: authActionTypes.errorData,
    error: string | null
}
export type ActionType =  authACtype | errorACtype