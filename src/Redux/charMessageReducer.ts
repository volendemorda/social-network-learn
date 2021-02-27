import {chatAPI, MessageType} from "../components/API/ChatAPI";
import {Dispatch} from "redux";
import messageReducer from "./messageReducer";

enum ActionType {
    MessageReceive= 'MessageReceive'
}
interface initStateTypes {
    message: null | MessageType
}
const initState = {
    message: null
}
type Action = MessageReceiveActionType
const ChatReducer = (state = initState,action:Action)=>{
    switch (action.type) {
        case ActionType.MessageReceive:
            return{
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}

interface MessageReceiveActionType {
    type: ActionType.MessageReceive,
    payload: MessageType
}
