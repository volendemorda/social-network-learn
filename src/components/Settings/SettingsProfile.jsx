import React from 'react'
import photo from './../../image/unknow.jpg'
import './settings.css'

const SettingsProfile = () =>{
  return(
    <section className="settings-profile main">
      <div className="container">
        <div className="settings-profile__header">
          <div className="settings-profile__picture">
              <img src={photo} alt="profile_image"/>
          </div>
          <div className="settings-profile__discribe">
            <h4 className="settings-profile__nickName">LordSzn</h4>
            <p className="settings-profile__aboutMe">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci voluptatum omnis facilis sapiente optio debitis eveniet totam earum numquam. Sunt.</p>
          </div>
        </div>
        <div className="settings-profile__wrapper">
          <div className="settings-profile__inputFilePhoto">
            <input type="file"/>
          </div>
        </div>
          <div className="settings-profile__status">
            <p></p>
          </div>
        <div className="settings-profile__contacts">

        </div>
        <p className="settings-profile__lookingJob">Поиск работы: </p>
        <input type="checkbox"/>
        <p className="settings-profile__discribeJob">Описание работы: </p>
      </div>
    </section>
  )
}

export default SettingsProfile