export interface InitialStateType {
    postData: {
        id: number
        text: string 
        image: string 
    } []
}
export enum PostActionTypes {
    add_post = "ADDPOST",
    update_post = "UPDATEPOST"
}
