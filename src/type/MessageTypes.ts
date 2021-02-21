export interface initialMessageType {
    user: {
        name: string,
        id: number
    }[],
    message: {
        id: number,
        message: any
    }[],
    newMessageText: string | null
}
export enum MessageActionTypes{
    send_message = "SENDMESSAGE",
    update_message_text = "UPDATENEWTEXT"
}
export type MessageAction = updateMessageCreatorType | addMessageCreatorType

export interface updateMessageCreatorType {
    type: MessageActionTypes.update_message_text,
    newTextMessage: string | null
}
export interface addMessageCreatorType {
    type: MessageActionTypes.send_message
}
