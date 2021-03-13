import React, { ChangeEvent } from "react"
import FacebookIcon from "@material-ui/icons/Facebook"
import GitHubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import unKnow from "../../accecs/image/unknow.jpg"
import ProfileStatus from "./profileStatus"
import Proloader from "../../accecs/proloader/proloader"
import { ProfileType } from "../../type/ProfileTypes"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';


type PropsType = {
  getProfileThunkCreator:(id: number) => Promise<void>
  ProfileStatusThunkCreator: (id: number) => Promise<void>
  profile: ProfileType | null
  status: null | string
  updateProfileStatusThunkCreator: (status: string | null )=> Promise<void>
  updatePhotoThunkCreator:(image: File)=> Promise<void>
  isOwner: boolean
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    small: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);

const UserProfile: React.FC<PropsType> = ({ profile, status, updateProfileStatusThunkCreator,isOwner,updatePhotoThunkCreator }) => {
  const classes = useStyles()
  const onChangeFileUpload = (event:ChangeEvent<HTMLInputElement>)=>{
    if (event.target.files?.length){
    updatePhotoThunkCreator(event.target.files[0])
    }
  }

  if (!profile) {
    return <Proloader />
  }
  return (
    <div>
      <div className="profile-users main">
        <Container maxWidth="sm">
          <div className="profile-users__header">
            <div className="profile-users__picture">
              {profile.photos.small === null ? (
                <Avatar alt={profile.fullName} src={unKnow} className={classes.small} />
              ) : (
                <Avatar alt={profile.fullName} src={profile.photos.large!} className={classes.small}/>
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
        </Container>
      </div>
    </div>
  )
}
export default UserProfile
