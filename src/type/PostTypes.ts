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
