import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
           <SidebarRow 
            src={user.photoURL} 
            title={user.displayName}
           />
           <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
           <SidebarRow Icon={PeopleIcon} title="People"/>
           <SidebarRow Icon={ChatIcon} title="Chat"/>
           <SidebarRow Icon={VideoLibraryIcon} title="VideoLibrary"/>
        </div>
    )
}

export default Sidebar;
