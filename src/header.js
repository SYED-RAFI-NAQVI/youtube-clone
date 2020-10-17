import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="Youtube Logo" />
            <MenuIcon />
            <input type="text"/>
            <SearchIcon />
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar />
        </div>
    )
}

export default Header
