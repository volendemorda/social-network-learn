import React from "react";
import './Post_item.css'

interface PostType {
    id: number
    text: string
    image: string | null
}

const ProfileItem: React.FC<PostType> = ({id, text, image}) => {
    return (
        <div className="post">
            <div className="post-header">
                <img src={image!} alt=""/>
            </div>
            <div className="post-content">
                <div className="post-item__text">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileItem