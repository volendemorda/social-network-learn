import React from 'react'
import style from './post.module.css'
import Text from "./components/Text";
import ImagePost from "./components/imagePost";
import {Redirect} from "react-router-dom";
import {TextareaAutosize} from "@material-ui/core";


const Post = (props)=>{
    //render props in components
    const generatePostText = props.PostPage.text.map(texts=><Text text={texts.text} key={texts.id} id={texts.id}/>)
    const generatePostImage = props.PostPage.image.map(i=><ImagePost image={i.img} key={i.id} id={i.id}/>)
    //function
    const newPostElement = React.createRef()
    const addPost = ()=>{
        props.addPostNew()
    }
    const onPostChange = ()=>{
        const text = newPostElement.current.value
        props.updatePostAdd(text)
    }
  return(
    <div className="post main">
     <div className="container">
         <div className={style.post__form}>
             <TextareaAutosize  className={style.postAdd__textarea} onChange={onPostChange} value={props.PostPage.newPost} ref={newPostElement} placeholder="Напишите что-нибудь">
             </TextareaAutosize>
             <button  className={style.postAdd__btn} onClick={addPost}>Отправить</button>
                 <div className={style.post__column}>
                     <div className={style.post__item}>
                         <div className={style.post__image}>
                            {generatePostImage}
                         </div>
                         <div className={style.post__text}>
                             {generatePostText}
                         </div>
                     </div>
                 </div>
         </div>
     </div>
    </div>
  )
}
export  default Post