export interface InitialStateType {
    postData: {
        id: number,
        text: string | null,
        image: string | null
    } []
}
export enum PostActionTypes {
    add_post = "ADDPOST",
    update_post = "UPDATEPOST"
}
export interface addPostActionCreatorType{
    type: PostActionTypes.add_post,
    image: string
    postText: string
}

export type PostAction =
    addPostActionCreatorType

