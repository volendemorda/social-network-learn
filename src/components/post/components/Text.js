import React from 'react'
import style from "../post.module.css";
import image from "../../../image/Rectangle 5.jpg";


const Text = (props)=>{
    return (
        <div className={style.text__wrapper}>
            <p className={style.post__text__main} id={props.id}>{props.text}</p>
        </div>
)
}
export default Text