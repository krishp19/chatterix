/* eslint-disable no-unused-vars */
import React from 'react'
import SearchInput from './searchInput';
import Conversation from './Conversation';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

function Sidebar() {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <h1>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogoutButton />
      </h1>
    </div>
  )
}

export default Sidebar