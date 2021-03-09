import React, {ChangeEvent} from "react"
import style from "./post.module.css"
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import ProfileItem from "./components/ProfileItem";

type propsType = {
    postData:{
        id: number
        text: string 
        image: string 
    }[]
    addPostActionCreator: (text: string, image: any) => void
    isAuth: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
    }),
);
const Post: React.FC<propsType> = (props) => {
    const [textPost, setTextPost] = React.useState('')
    const [image, setImage] = React.useState<null | string>(null)
    const generatePost = ()=>{
        return props.postData.map(p=><ProfileItem id={p.id} text={p.text} image={p.image} key={p.id}/>)
    }
    const classes = useStyles()
    const clickHandlerAddPost = () => {
        if (!textPost)
            return
            props.addPostActionCreator(textPost, null)
        setTextPost('')
    }
    return (
        <div className=" main">
            <div className="container">
                <div className={style.post__form}>
                    <textarea
                        className={style.postAdd__textarea}
                        onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setTextPost(e.currentTarget.value)}
                        value={textPost}
                        placeholder="Напишите что-нибудь">
                    </textarea>
                    <button className={style.postAdd__btn} onClick={clickHandlerAddPost}>
                        Отправить
                    </button>
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file"/>
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera/>
                        </IconButton>
                    </label>
                    <div className={style.post}>
                        {generatePost()}
                    </div>
                </div>
            </div>
        </div>
    )
}
//todo: сделать
export default Post