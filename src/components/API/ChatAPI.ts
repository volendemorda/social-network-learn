let subscribers = [] as SubscribeType[]

let channel: WebSocket
const closeHandler = () =>{
    setTimeout(createWebSocketChannel,3000)
}
const createWebSocketChannel = () => {
    channel?.removeEventListener('close',closeHandler)
    channel?.close()
    channel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    channel.addEventListener('close',closeHandler)
}

const messageHandler = (e: MessageEvent)=>{
    const newMessage = JSON.parse(e.data)
    subscribers.forEach(s=>s(newMessage))
}

export const chatAPI = {
    subscribe(callback:SubscribeType){
        subscribers.push(callback)
        return ()=>{
            subscribers = subscribers.filter(s=> s !== callback)
        }
    },
    unSubscribe(callback:SubscribeType){
        subscribers = subscribers.filter(s=> s !==callback)
    }

}

type SubscribeType = ( messages: MessageType[]) => void
export interface MessageType {
    message: string,
    photo: string,
    userName: string,
    userId: number
}