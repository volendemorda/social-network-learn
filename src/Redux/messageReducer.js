const update_message_text = "UPDATENEWTEXT"
const send_message = "SENDMESSAGE"

const initMessage = {
  user: [
    { name: "Milohin", id: 1 },
    { name: "fwefwe", id: 2 },
    { name: "fwefwfw", id: 3 },
    { name: "fwefwfw", id: 4 },
  ],
  message: [
    { id: 1, message: "hello my fr" },
    { id: 2, message: "hello my fr" },
    { id: 3, message: "hello my fr" },
    { id: 4, message: "hello my fr" },
  ],
  newMessageText: "",
}

const messageReducer = (state = initMessage, action) => {
  switch (action.type) {
    case update_message_text:
      let copyState = {
        ...state,
      }
      copyState.newMessageText = action.newTextMessage
      return copyState

    case send_message:
      let body = state.newMessageText
      return {
        ...state,
        newMessageText: "",
        message: [...state.message, { id: 7, message: body }],
      }
    default:
      return state
  }
}

export const updateMessageCreator = (text) => {
  return {
    type: update_message_text,
    newTextMessage: text,
  }
}
export const addMessageCreator = () => {
  return {
    type: send_message,
  }
}
export default messageReducer
