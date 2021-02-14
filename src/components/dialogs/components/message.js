import React from 'react'
import style from '../dialog.module.css'

const Message = (props)=>{
   return  <p className={style.messageText} id={props.mesId}>{props.Messeges}</p>
}
export default Message