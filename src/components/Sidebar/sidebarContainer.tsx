import React from "react"
import Sidebar from "./sidebar"
import { connect } from "react-redux"
import { setProfileDataThunkCreator } from "../../Redux/sidebarReducer"
import { AppReducer } from "../../Redux/redux-store"

interface PropsType {
  setProfileDataThunkCreator: () => void
  id: number
  login: string
  email: string
}

const SidebarContainer: React.FC<PropsType> = ({setProfileDataThunkCreator,id,login,email})=>{
  React.useEffect(() => {
    setProfileDataThunkCreator()
  },[])
  return(
    <Sidebar/>
  )
}

const mapStateToProps = (state: AppReducer) => {
  return {
    Sidebar: state.Sidebar
  }
}
export default connect(mapStateToProps, {
  setProfileDataThunkCreator,
})(SidebarContainer)
