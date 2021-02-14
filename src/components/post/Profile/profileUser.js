import React, { useEffect, useState } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import unKnow from './../../../image/unknow.jpg'
import ProfileStatus from './profileStatus';
import Proloader from '../../Users/proloader/proloader';

const UserProfile = ({profile,status,isFetchind})=>{
    return(
        <>
        <div>
            <div className="profile-users main">
                <div className="container">
                    <div className="profile-users__header">
                        <div className="profile-users__picture">
                          {
                              profile.photos && profile.photos.small === null
                              ?  <img src={unKnow} alt=""/>
                              :  <img src={profile.photos} alt=""/>
                          }
                        </div>
                        <div className="profile-users__person">
                            <div className="profile-users__name">
                            {profile.fullName}
                            </div>
                            <div className="profile-users__job">
                                {profile.lookingForAJob === false
                                ? <span>не ищу работу...</span>
                                : <span>в активном поиске</span>
                                }
                            </div>
                            <div className="profile-users__discribe">
                                <ProfileStatus status={status}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default UserProfile