export interface UsersType {
    items:{
        name: string
        id: number
        uniqueUrlName: null | string
        photos: {
            small: string | null
            large: string | null
        }[]
        status: string | null
        followed: boolean
    }
    totalCount: number,
    error: null | string
}
export interface AuthMeType{
    data:{
        id:number,
        login: string,
        email: string
    },
    messages: string[],
    fieldsErrors: string[],
    resultCode: number
}