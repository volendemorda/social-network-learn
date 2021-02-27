import React from "react";
import SendIcon from '@material-ui/icons/Send';
import CancelScheduleSendIcon from '@material-ui/icons/CancelScheduleSend';
import {MessageType} from "./../API/ChatAPI";
import './style.css'


export const GenerateMessage:React.FC<{wsChannel: WebSocket | null}> = ({wsChannel})=>{
    const [message,setMessage] = React.useState<MessageType[]>([])
    React.useEffect(()=>{
        const messageHandler = (e: MessageEvent)=>{
            setMessage((prevMessage)=>[...prevMessage,...JSON.parse(e.data)])
        }
        wsChannel?.addEventListener('message',messageHandler)
        return ()=>{
            wsChannel?.removeEventListener('message',messageHandler)
        }
    },[wsChannel])
    return(
        <div>
            {message.map((item,index)=><Messages key={index} message={item.message} photo={item.photo} userName={item.userName} userId={item.userId}/>)}
        </div>
    )
}

export const Messages: React.FC<MessageType> = ({photo,userId,userName,message})=>{
    return (
        <div className="wrapper__chat">
            <div className="chat-page__container">
                <div className="chat-page__image">
                    <img src={photo || 'https://www.pngitem.com/pimgs/m/52-526033_unknown-person-icon-png-transparent-png.png'} alt="аватарка"/>
                </div>
                <div className="chat-page__name">
                    {userName}
                </div>
            </div>
            <div className="chat-page__message">
                {message}
            </div>
        </div>
    )
}
export const FromAddMessage: React.FC<{wsChannel:WebSocket | null}> = ({wsChannel})=>{
    const [textMessage,setTextMessage] = React.useState('')
    const [readyStatus,setReadyStatus] = React.useState<boolean>(false)
    React.useEffect(()=>{
        const openHandler = ()=>{
            setReadyStatus(true)
        }
        wsChannel?.addEventListener('open',openHandler)
        return ()=>{
            wsChannel?.removeEventListener('open',openHandler)
        }
    },[wsChannel])
    const sendMessage = ()=>{
        if (!textMessage)
            return
        wsChannel?.send(textMessage)
        setTextMessage('')
    }
    return(
        <div className="add-message__form">
            <textarea className="add-message__textarea" placeholder="Напиши что-нибудь" onChange={(e)=>setTextMessage(e.currentTarget.value)} value={textMessage}>
            </textarea>
                <div className="add-message__form-action">
                    <button className="add-message__send" onClick={sendMessage} disabled={wsChannel !== null && !readyStatus}>
                        {
                            textMessage
                            ? <SendIcon style={{
                                    fontSize: 40,
                                    color: '#fff'
                                }}/>
                            : <CancelScheduleSendIcon
                                    style={{
                                        fontSize: 40,
                                        color: '#fff'
                                    }}
                                />
                        }
                    </button>

                </div>
        </div>
    )
}