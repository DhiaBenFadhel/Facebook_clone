import { Avatar } from '@material-ui/core';
import { ExpandMoreOutlined, ThumbUp } from '@material-ui/icons';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/AccountCircle";
import React from 'react';
import './Post.css';
import { useStateValue } from './StateProvider';
function Post({profilePic, image, username, timestamp, message}) {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="post">
            <div className="post__top">
                <Avatar 
                    src={user.photoURL}
                    className="post__avatar"
                />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""></img>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUp/>  
                    <p>I Like</p>                             
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon/>  
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon/>  
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon/>  
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div>
    );
}

export default Post
