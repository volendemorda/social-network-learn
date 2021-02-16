import React from 'react'
import '../Users/users.css'
import unKnow from '../../image/unknow.jpg'
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";


const UserAPI = (props) => {
    const countPageUsers = Math.ceil(props.totalCountUsers / props.pageSize)
    const page = []
    for (let i = 1; i <= countPageUsers; i++) {
        page.push(i)
    }
    const generateButtonPage = () => {
        return page.map(item => {
            return (
                <button className={item === props.CurrentPage
                    ? `currentCountPage active`
                    : `currentCountPage`
                } onClick={() => {
                    props.onChangedPage(item)
                }}>
                    {item}
                </button>
            )
        })
    }
    const generateComponentUser = () => {
        return props.UsersPage.map(u => {
            return (
                <div className="usersPage__wrapper">
                    <div className="usersPage__row">
                        <div className="usersPage__column">
                            <div className="usersPage__photo">
                                <NavLink to={`/profile/${u.id}`} >
                                    {u.photos.large === null
                                        ? <img src={unKnow} alt=""/>
                                        : <img src={u.photos.large} alt=""/>
                                    }
                                </NavLink>
                            </div>
                            <div className="usersPage__column">
                                <div className="usersPage__title" key={u.id}>
                                    {u.name}
                                </div>
                                <div className="usersPage__status">
                                    {u.status === null ? 'нет статуса...' : u.status}
                                </div>
                            </div>
                        </div>
                    </div>
                    {u.followed
                        ? <Button disable={props.disableButton.find(id=>id === u.id)} variant="outlined" color="primary" onClick={() => {props.UnfollowThunkCreator(u.id)}} className="usersPage__btn">Отписаться</Button>
                        : <Button variant="outlined" color="primary" onClick={() => {props.followThunkCreator(u.id)}} className="usersPage__btn">Подписаться</Button>
                    }
                </div>
            )
        })
    }
    return (
        <div className="usersPage main">
            <div className="container">
                {generateButtonPage()}
                <div className="usersPage__content">
                    {generateComponentUser()}
                </div>
            </div>
        </div>
    )
}

export default UserAPI