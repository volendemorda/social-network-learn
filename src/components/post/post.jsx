import React from "react"
import style from "./post.module.css"
import Text from "./components/Text"
import ImagePost from "./components/imagePost"
import { Redirect } from "react-router-dom"
import { TextareaAutosize } from "@material-ui/core"

const Post = ({ PostPage, addPostNew, updatePostAdd, AuthPage }) => {
    const [textPost,setTextPost] = React.useState('')
    const generatePostText = () =>{PostPage.postData.map((item)=><Text post={item.text} id={item.id} 
    image = {item.image}/>)}
  return (
    <div className="post main">
      <div className="container">
        <div className={style.post__form}>
          <TextareaAutosize
            className={style.postAdd__textarea}
            onChange={setTextPost}
            value={textPost}
            placeholder="Напишите что-нибудь"
          ></TextareaAutosize>
          <button className={style.postAdd__btn}>
            Отправить
          </button>
          <div className={style.post__column}>
            <div className={style.post__item}>
              <div className={style.post__image}></div>
              <div className={style.post__text}>{generatePostText}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post
