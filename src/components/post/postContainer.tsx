import {addPostActionCreator} from "../../Redux/postReducer";
import Post from "./post";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state:any)=>{
    return{
        PostPage: state.PostPage.postData,
        AuthPage: state.AuthPage.isAuth
    }
}
export default compose(
    connect(mapStateToProps,{
        addPostActionCreator
    }),
    // withAuthRedirect
)(Post)
