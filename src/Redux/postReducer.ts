import {
  InitialStateType,
  PostActionTypes
} from "../type/PostTypes";
import { inferActionType } from "./redux-store";


const initPost:InitialStateType  = {
  postData: [
    {
      id: 1,
      text: "hello my friend. it's my first post",
      image:
        "https://w-dog.ru/wallpapers/0/3/454758574794477/iphone-5-yabloko-eppl-ajfon-telefon-gadzhet-chernyj-korobka.jpg"
    },
  ], 
}
export const postReducer = (state = initPost, action: ActionTypes):InitialStateType => {
  switch (action.type) {
    case PostActionTypes.add_post:
      return {...state,postData: [...state.postData,{id: 2,text: action.postText,image:null}]}
    default:
      return state
  }
}
type ActionTypes = inferActionType<typeof PostAction>
export const PostAction = {
  addPostActionCreator: (postText:string,image: string | null) => {
    return {
      type: PostActionTypes.add_post, 
      postText, 
      image
    }
  }
}


export default postReducer
