import React from 'react'
import {addPostActionCreator, updatePostActionCreator} from "../../Redux/postReducer";
import Post from "./post";
import {connect} from "react-redux";
import './components/profileStyle.css'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state)=>{
    return{
        PostPage: state.PostPage,
        AuthPage: state.AuthPage.isAuth
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        updatePostAdd: (text)=>{
            dispatch(updatePostActionCreator(text))
        },
        addPostNew: ()=>{
            dispatch(addPostActionCreator())
        }
    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Post)
