import React from "react"
import FacebookIcon from "@material-ui/icons/Facebook"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import unKnow from "../../accecs/image/unknow.jpg"
import ProfileStatus from "./profileStatus"
import Proloader from "../../accecs/proloader/proloader"
import { ProfileType } from "../../type/ProfileTypes"

type PropsType = {
  getProfileThunkCreator:(id: number) => Promise<ProfileType>
  ProfileStatusThunkCreator: (id: number) => Promise<string>
  profile: ProfileType | null
  status: null | string
  updateProfileStatusThunkCreator: (status: string | null )=> Promise<void>
  updatePhotoThunkCreator:(image: string)=> Promise<void>
  isOwner: boolean
}

const UserProfile: React.FC<PropsType> = ({ profile, status, updateProfileStatusThunkCreator,isOwner,updatePhotoThunkCreator }) => {
  const onChangeFileUpload = (event:any)=>{
    updatePhotoThunkCreator(event.target.files[0]);
  }

  if (!profile) {
    return <Proloader />
  }
  return (
    <div>
      <div className="profile-users main">
        <div className="container">
          <div className="profile-users__header">
            <div className="profile-users__picture">
              {profile.photos.small === null ? (
                <img src={unKnow} alt="" />
              ) : (
                <img src={profile.photos.large!} alt="" />
              )}
            </div>
            <div className="profile-users__person">
              <div className="profile-users__name">{profile.fullName}</div>
              <div className="profile-users__job">
                {profile.lookingForAJob === false ? (
                  <span>не ищу работу...</span>
                ) : (
                  <span>в активном поиске</span>
                )}
              </div>
              <div className="profile__social">
                <ul>
                  <li>
                    <FacebookIcon /> {profile.contacts.facebook || "нет..."}
                  </li>
                  <li>
                    <GitHubIcon /> {profile.contacts.github || "нет..."}
                  </li>
                  <li>
                    <InstagramIcon /> {profile.contacts.instagram || "нет..."}
                  </li>
                </ul>
                <div className="profile-users__discribe">
                  {
                      isOwner 
                      ?<ProfileStatus status={status}
                      updateProfileStatusThunkCreator={updateProfileStatusThunkCreator} />
                      : null
                  }   
                </div>
                {
                  isOwner 
                  ? <input name="file" type="file" className="field field__file" multiple onChange={onChangeFileUpload}/>
                  : null
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserProfile
