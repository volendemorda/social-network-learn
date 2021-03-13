import {
  initialMessageType,
  MessageActionTypes,
} from "../type/MessageTypes";
import { inferActionType } from "./redux-store";

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

const messageReducer = (state = initMessage, action:ActionType): initialMessageType => {
  switch (action.type) {
    case MessageActionTypes.update_message_text:
      return{...state,newMessageText: action.newTextMessage}
    case MessageActionTypes.send_message:
      return {...state,newMessageText: "",message: [{ id: 7, message: state.newMessageText }]}
    default:
      return state
  }
}
type ActionType = inferActionType<typeof messageAction>

const messageAction = {
  updateMessageCreator: (text: string) => ({
    type: MessageActionTypes.update_message_text,newTextMessage: text} as const),
   addMessageCreator: () => ({type: MessageActionTypes.send_message} as const)
}

export default messageReducer
