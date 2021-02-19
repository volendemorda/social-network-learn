const add_post = "ADDPOST"
const update_post = "UPDATEPOST"
const setUser = "setUser"
const initPost = {
  text: [{ id: 1, text: "hello my friend. it's my first post" }],
  image: [
    {
      id: 1,
      img:
        "https://w-dog.ru/wallpapers/0/3/454758574794477/iphone-5-yabloko-eppl-ajfon-telefon-gadzhet-chernyj-korobka.jpg",
    },
  ],
  newPost: "",
  profile: null,
}

export const postReducer = (state = initPost, action) => {
  switch (action.type) {
    case add_post:
      let copyState = {}
      let newPost = {
        id: 5,
        text: state.newPost,
      }
      copyState = { ...state }
      copyState.text = [...state.text]
      copyState.text.push(newPost)
      copyState.newPost = ""
      return copyState
    case update_post:
      let copyStateUpdate = {}
      copyStateUpdate = { ...state }
      copyStateUpdate.newPost = action.newText
      return copyStateUpdate
    case setUser:
      return {
        ...state,
        profile: action.user,
      }
    default:
      return state
  }
}

export const addPostActionCreator = () => {
  return {
    type: add_post,
  }
}
export const updatePostActionCreator = (text) => {
  return {
    type: update_post,
    newText: text,
  }
}
export const setUserProfile = (user) => {
  return {
    type: setUser,
    user,
  }
}
export default postReducer
