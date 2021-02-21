import {
  addMessageCreatorType,
  initialMessageType, MessageAction,
  MessageActionTypes,
  updateMessageCreatorType
} from "../type/MessageTypes";

const initMessage: initialMessageType = {
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

const messageReducer = (state = initMessage, action:MessageAction): initialMessageType => {
  switch (action.type) {
    case MessageActionTypes.update_message_text:
      return{...state,newMessageText: action.newTextMessage}
    case MessageActionTypes.send_message:
      return {...state,newMessageText: "",message: [{ id: 7, message: state.newMessageText }]}
    default:
      return state
  }
}

export const updateMessageCreator = (text: string):updateMessageCreatorType => ({
  type: MessageActionTypes.update_message_text,newTextMessage: text,  
})
export const addMessageCreator = ():addMessageCreatorType => ({type: MessageActionTypes.send_message})
export default messageReducer
