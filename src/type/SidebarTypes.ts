import { ProfileType } from "./ProfileTypes";

export enum listActionType {
    setProfileUser = "setProfileUser",
}
export interface InitialState{
    profile: null | ProfileType
}
