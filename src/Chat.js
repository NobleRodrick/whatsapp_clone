import React, { useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material';
import axios from './axios';
function Chat({ messages }) {

  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    // send message to server
    e.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      name: "Rodrick APP",
      received: false
    })

    setInput('');
    
  }
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar />

        <div className='chat_headerInfo'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='chat_body'>
        {messages.map((message) => (
          <p className={`chat_message ${message.received && 'chat_receiver'}`}>
            <span className='chat_name'>{message.name}</span>
            {message.message}
            <span className='chat_timestamp'>{message.timestamp}</span>  
          </p>
        ))}

      </div>

      <div className='chat_footer'>
        <InsertEmoticon />
        <form>
          <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder='Type a message'
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
          
        </form>
          
      </div>
    </div>
  )
}

export default Chat
