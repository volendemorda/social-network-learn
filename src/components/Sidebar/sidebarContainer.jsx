import React from 'react';
import Sidebar from './sidebar';
import {connect} from "react-redux";
import {setProfileDataThunkCreator} from './../../Redux/sidebarReducer'

 class SidebarContainer extends React.Component{
  componentDidMount() {
    this.props.setProfileDataThunkCreator()
  } 
  render() {
    console.log(this.props);
      return <Sidebar {...this.props}/>
  }
 }

 const mapStateToProps = (state)=>{
  return{
      Sidebar: state.Sidebar
  }
}
export default connect(mapStateToProps,{
  setProfileDataThunkCreator
})(SidebarContainer)