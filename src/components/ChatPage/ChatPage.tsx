import React from 'react'
import {FromAddMessage, GenerateMessage} from "./Chat";



const ChatPage: React.FC = () => {
    return (
        <div className={"main chat-page-photo"}>
            <div className="container">
                <Chat/>
            </div>
        </div>
    )
}
export default ChatPage

const Chat: React.FC = () => {
    const [wsChannel, setWsChannel] = React.useState<WebSocket | null>(null)
    React.useEffect(() => {
        let channel: WebSocket
        const closeHandler = () =>{
            setTimeout(createWebSocketChannel,3000)
        }
        const createWebSocketChannel = () => {
            channel?.removeEventListener('close',closeHandler)
            channel?.close()
            channel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            channel.addEventListener('close',closeHandler)
            setWsChannel(channel)
        }
        createWebSocketChannel()
        return ()=>{
            channel.removeEventListener('close',closeHandler)
            channel.close()
        }
    },[])
    return (
        <div>
            <div className="chat-page">
                <GenerateMessage wsChannel={wsChannel}/>
            </div>
            <div className="add-message">
                <FromAddMessage wsChannel={wsChannel}/>
            </div>
        </div>
    )
}