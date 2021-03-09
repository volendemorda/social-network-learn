export interface InitialState {
    status: null | string
    profile: null | ProfileType
}
export interface ProfileType{
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: {
        small: null | string
        large: null | string
    }
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}
export enum listActionTypes {
    setProfile = "setProfile",
    setStatus = "setStatus",
    toggleFetching = "toggleFetching",
    setPhoto = "setPhoto",
}
