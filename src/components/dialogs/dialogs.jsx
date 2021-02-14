import React from 'react'
import './dialog.css'
import Message from "./components/message";
import User from "./components/users";
import {Redirect} from "react-router-dom";



const Dialogs = (props)=>{
    debugger
    const generateMessage = props.MessagePage.message.map(m=><Message Messeges = {m.message} key={m.id} mesId = {m.id}/>)
    const generateUser = props.MessagePage.user.map(user=><User name={user.name} key={user.id} id={user.id}/>)
    let newMessageBody = props.MessagePage.newMessageText
    const onSendMessageClick=()=>{props.onSendMessage()}
    const onchangeMessage = (event)=>{
        let body = event.target.value
        props.updateMessageDialogs(body)
    }
  return(
    <div className="dialog__wrapper main">
        <div className="container">
            <div className="dialog__row">
                <div className="dialog__users">
                    <div>{generateUser}</div>
                </div>
                <div className="dialog__messages">
                    <div>{generateMessage}</div>
                </div>
            </div>
            <div className="message__add">
                <textarea placeholder='Введите свое сообщение' value={newMessageBody} onChange={onchangeMessage} className='texterea__message'></textarea>
                <button className='message__btn' onClick={onSendMessageClick}>Отправить</button>
            </div>
        </div>
    </div>
  )
}
export default Dialogs