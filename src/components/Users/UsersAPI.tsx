import React from "react"
import "../Users/users.css"
import unKnow from "../../image/unknow.jpg"
import { NavLink } from "react-router-dom"
import Button from '@material-ui/core/Button';
import {UsersTypes} from "../../type/UsersTypes";

interface propsType {
  totalCountUsers:  number
  pageSize: number
  CurrentPage: number
  onChangedPage: (item:number)=> void
  UsersPage: Array<UsersTypes>
  disableButton: Array<number> | null
  UnfollowThunkCreator: (id:number)=> void
  followThunkCreator: (id:number)=> void
}
const UserAPI: React.FC<propsType> = ({totalCountUsers,pageSize,CurrentPage,onChangedPage,UsersPage,disableButton,UnfollowThunkCreator,followThunkCreator}) => {
  const [countPage, setCountPage] = React.useState<number>(1)
  const countPageUsers = Math.ceil(totalCountUsers / pageSize)
  let leftPortionPageNumber = (countPage - 1) * pageSize + 1
  let rightPortionNumber = countPage * pageSize
  const page:Array<number> = []
  for (let i = 1; i <= countPageUsers; i++) {
    page.push(i)
  }
  const generateButtonPage = () => {
    return (
      <div className="pagination__container">
       <button disabled={countPage < 2} onClick={() => {setCountPage(countPage - 1)}}
        className="list__button">Обратно</button>
        {page
          .filter((p) => p >= leftPortionPageNumber && p <= rightPortionNumber)
          .map((item:number) => {
            return (
              <button
                key={item}
                className={
                  item === CurrentPage
                    ? `currentCountPage active`
                    : `currentCountPage`
                }
                onClick={() => {
                  onChangedPage(item)
                }}
              >
                {item}
              </button>
            )
          })}
        <button 
        onClick={() => {setCountPage(countPage + 1)}}
        className="list__button">Вперед</button>
      </div>
    )
  }
  const generateComponentUser = () => {
    return UsersPage.map((u:UsersTypes) => {
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
                // disabled={disableButton?.find(id => id === u.id)}
                variant="outlined"
              color="primary"
              onClick={() => {
                UnfollowThunkCreator(u.id)
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
                followThunkCreator(u.id)
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
        {generateButtonPage()}
      <div className="container">
        <div className="usersPage__content">{generateComponentUser()}</div>
      </div>
    </div>
  )
}

export default UserAPI