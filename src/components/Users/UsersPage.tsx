import React from "react"
import "../Users/users.css"
import unKnow from "../../accecs/image/unknow.jpg"
import { NavLink } from "react-router-dom"
import Button from '@material-ui/core/Button';
import {UsersTypes} from "../../type/UsersTypes";
import Pagination from "./Pagination";

export  type propsType  = {
  totalCountUsers:  number
  pageSize: number
  CurrentPage: number,
  getUsersThunkCreator: (id: number,pageSize: number)=> Promise<void>
  onChangedPage: (item:number)=> void
  UsersPage: Array<UsersTypes>
  disableButton: Array<number>
  UnfollowThunkCreator: (id:number)=> void
  followThunkCreator: (id:number)=> void
  isFetching: boolean
}

const UserAPI: React.FC<propsType> = (props) => {
  const generateComponentUser = () => {
    return props.UsersPage.map((u:UsersTypes) => {
      return (
        <div className="usersPage__wrapper">
          <div className="usersPage__row">
            <div className="usersPage__column">
              <div className="usersPage__photo">
                <NavLink to={`/profile/${u.id}`}>
                  {u.photos.large === null ? (
                    <img src={unKnow} alt="" />
                  ) : (
                    <img src={u.photos.large} alt="" />
                  )}
                </NavLink>
              </div>
              <div className="usersPage__column">
                <div className="usersPage__title" key={u.id}>
                  {u.name}
                </div>
                <div className="usersPage__status">
                  {u.status === null ? "нет статуса..." : u.status}
                </div>
              </div>
            </div>
          </div>
          {u.followed
              ? (
            <Button
                // todo: рефактор
                // disabled={disableButton?.find(id => id === u.id)}
                variant="outlined"
              color="primary"
              onClick={() => {
                props.UnfollowThunkCreator(u.id)
              }}
              className="usersPage__btn"
            >
              Отписаться
            </Button>
          ) : (
            <Button
                // disabled={disableButton?.find((id) => id === u.id)}
                variant="outlined"
              color="primary"
              onClick={() => {
                props.followThunkCreator(u.id)
              }}
              className="usersPage__btn"
            >
              Подписаться
            </Button>
          )}
        </div>
      )
    })
  }
  return (
    <div className="usersPage main">
        <Pagination {...props}/>
      <div className="container">
        <div className="usersPage__content">{generateComponentUser()}</div>
      </div>
    </div>
  )
}

export default UserAPI
