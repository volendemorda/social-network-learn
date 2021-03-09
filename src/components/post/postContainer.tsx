import {PostAction} from "../../Redux/postReducer";
import Post from "./post";
import {connect} from "react-redux";
import {compose} from "redux";
import { AppReducer } from "../../Redux/redux-store";

const mapStateToProps = (state:AppReducer)=>{
    return{
        postData: state.PostPage.postData,
        isAuth: state.AuthPage.isAuth
    }
}
export default compose(
    connect(mapStateToProps,{
        addPostActionCreator: PostAction.addPostActionCreator
    }),
    // withAuthRedirect
)(Post)
