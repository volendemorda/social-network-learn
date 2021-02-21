export interface InitialState {
    status: null | string
    profile: null | ProfileType[]
}
export interface ProfileType{
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
export interface setProfileACtype {
    type: listActionTypes.setProfile
    profile: any[]
}
export interface setStatusACtype {
    type: listActionTypes.setStatus
    status: string
}
export interface toggleFetchingACtype {
    type: listActionTypes.toggleFetching
    isFetchind: boolean
}
export interface setPhotoACtype {
    type: listActionTypes.setPhoto
    photo: string | null
}
export type ActionType =
    | setProfileACtype
    | setStatusACtype
    | toggleFetchingACtype
    | setPhotoACtype
