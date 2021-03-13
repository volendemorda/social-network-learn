export interface UsersType {
  items: {
    id: number
    name: string
    status: string | null
    photos: {
      small: string | null
      large: string | null
    }
    followed: boolean
  }[]
  totalCount: number
  error: null | string
}
export interface AuthMeType {
  data: {
    id: number
    login: string
    email: string
  }
  messages: string[]
  resultCode: number
}
export  interface IUnFollowType {
  resultCode: number
  messages: string[]
  data: object
}
