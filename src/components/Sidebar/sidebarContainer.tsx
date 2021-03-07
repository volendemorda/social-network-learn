import React from "react"
import Sidebar from "./sidebar"
import { connect } from "react-redux"
import { setProfileDataThunkCreator } from "../../Redux/sidebarReducer"
import { AppReducer } from "../../Redux/redux-store"
import { ProfileType } from "../../type/ProfileTypes"
import { AuthAction } from "../../Redux/auth"

type PropsType = {
  setProfileDataThunkCreator: ()=> void,
  Sidebar: null | ProfileType,
  isActive: boolean
}

const SidebarContainer: React.FC<PropsType> = (props)=>{
  React.useEffect(() => {
    props.setProfileDataThunkCreator()
  },[])
  return(
    <Sidebar {...props}/>
  )
}

const mapStateToProps = (state: AppReducer) => {
  return {
    Sidebar: state.Sidebar.profile,
    isActive: state.AuthPage.isActive
  }
}
export default connect(mapStateToProps, {
  setProfileDataThunkCreator,
  activateSidebar: AuthAction.activateSidebar
})(SidebarContainer)
  