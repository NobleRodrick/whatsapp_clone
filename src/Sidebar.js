import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar />
        <div className='sidebar_headerRight'>
            <IconButton>
                <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>
      </div>

      <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
          <SearchOutlined />
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>

      <div className='sidebar_chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>

    </div>
  );
}

export default Sidebar
