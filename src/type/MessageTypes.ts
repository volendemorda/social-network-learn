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

