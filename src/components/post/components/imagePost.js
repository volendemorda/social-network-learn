import React from 'react'
import style from "../post.module.css";

const ImagePost = (props)=>{
return(
    <div className={style.post__image}>
        <img src={props.image} alt="" id={props.id}/>
    </div>
)
}
export default ImagePost