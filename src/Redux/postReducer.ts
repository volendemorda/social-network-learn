import {
  addPostActionCreatorType,
  InitialStateType,
  PostAction,
  PostActionTypes,
  updatePostActionCreatorType
} from "../type/PostTypes";


const initPost:InitialStateType  = {
  postData: [
    {
      id: 1,
      text: "hello my friend. it's my first post",
      image:
        "https://w-dog.ru/wallpapers/0/3/454758574794477/iphone-5-yabloko-eppl-ajfon-telefon-gadzhet-chernyj-korobka.jpg"
    },
  ],
  newPost: ""
}
export const postReducer = (state = initPost, action: PostAction):InitialStateType => {
  switch (action.type) {
    case PostActionTypes.add_post:
      return {
        ...state,
        postData: {...state.postData,...{id:2, text: state.newPost, image: action.image}}
      }
    case PostActionTypes.update_post:
      return {...state,newPost: action.payload}
    default:
      return state
  }
}

export const addPostActionCreator = (image: string):addPostActionCreatorType => {
  return {
    type: PostActionTypes.add_post,
    image
  }
}
export const updatePostActionCreator = (text: string):updatePostActionCreatorType => {
  return {
    type: PostActionTypes.update_post,
    payload: text,
  }
}
export default postReducer
