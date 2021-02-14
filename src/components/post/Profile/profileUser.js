import React, { useEffect, useState } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import unKnow from './../../../image/unknow.jpg'
import ProfileStatus from './profileStatus';

const UserProfile = (props)=>{
    console.log(props);
    return(
        <div>
            <div className="profile-users main">
                <div className="container">
                    <header className="profile-users__header">
                        <div className="profile-users__picture">
                            
                        </div>
                        <div className="profile-users__person">
                            <div className="profile-users__name">
                               {/* {props.profile.fullName} */}
                            </div>
                            <div className="profile-users__discribe">
                                <ProfileStatus {...props}/>
                                {/* {props.profile.aboutMe || `нет статуса...`} */}
                            </div>
                            <div className="profile__social">
                                <ul>
                                    {/* <li><FacebookIcon/> {props.profile.contacts.facebook}</li> */}
                                    {/* <li><GitHubIcon/>{props.profile.contacts.github}</li>
                                    <li><InstagramIcon/>{props.profile.contacts.instagram}</li> */}
                                </ul>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    )
}
export default UserProfile