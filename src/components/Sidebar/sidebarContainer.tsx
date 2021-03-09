import React from "react"
import Sidebar from "./sidebar"
import { connect } from "react-redux"
import { setProfileDataThunkCreator } from "../../Redux/sidebarReducer"
import { AppReducer } from "../../Redux/redux-store"
import { ProfileType } from "../../type/ProfileTypes"
import { AuthAction } from "../../Redux/auth"

type mapStatePropsType = ReturnType<typeof mapStateToProps>
type mapDispatchType = {
  setProfileDataThunkCreator: ()=> Promise<void>,
  activateSidebar: (isActive: boolean)=> void
}
const SidebarContainer: React.FC<mapStatePropsType & mapDispatchType> = (props)=>{
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
})(SidebarContainer) as React.ComponentType
  