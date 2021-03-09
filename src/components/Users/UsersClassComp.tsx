import React from "react"
import UserAPI from "./UsersPage"
import Proloader from "../../accecs/proloader/proloader"
import {MapPropsType} from "./UsersContainer"

type MapDispatchType = {
  getUsersThunkCreator: (item: number,  pageSize: number) => Promise<void>,
  UnfollowThunkCreator: (id: number) => void,
  followThunkCreator: (id: number) => void
}


const Users:React.FC<MapPropsType & MapDispatchType> = (props)=>{
  React.useEffect(()=>{
    props.getUsersThunkCreator(props.CurrentPage,props.pageSize)
  },[])
  const onChangedPage = (item: number) => {
    props.getUsersThunkCreator(item,props.pageSize)
  }
  return(
    <div>
       {props.isFetching === true ? <Proloader /> : null}
       <UserAPI {...props} onChangedPage={onChangedPage} />
     </div>
  )
}
export default Users
