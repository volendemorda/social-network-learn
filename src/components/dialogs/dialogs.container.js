import {
  addMessageCreator,
  updateMessageCreator,
} from "../../Redux/messageReducer"
import Dialogs from "./dialogs"
import { connect } from "react-redux"
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux"

const mapStateToProps = (state) => {
  return {
    MessagePage: state.MessagePage,
    AuthPage: state.AuthPage.isAuth,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageDialogs: (body) => dispatch(updateMessageCreator(body)),
    onSendMessage: () => dispatch(addMessageCreator()),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
  // withAuthRedirect
)(Dialogs)
