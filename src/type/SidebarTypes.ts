export enum listActionType {
    setProfileUser = "setProfileUser",
}
export interface InitialState{
    id: null | number,
    email: null | string,
    login: null | string
}
export interface setProfileDataACtype {
    type: listActionType.setProfileUser,
    data: dataType
}
type dataType = {
    id: number | null,
    email: string |null,
    login: string | null
}