export interface InitialStateType {
    postData: {
        id: number,
        text: string,
        image: string
    } []
    newPost: string | null
}
export enum PostActionTypes {
    add_post = "ADDPOST",
    update_post = "UPDATEPOST"
}
export interface addPostActionCreatorType{
    type: PostActionTypes.add_post,
    image: string
}
export interface updatePostActionCreatorType{
    type: PostActionTypes.update_post,
    payload: string
}
export type PostAction =
    addPostActionCreatorType
    | updatePostActionCreatorType
