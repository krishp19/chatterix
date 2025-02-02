/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import useConversation from '../../zustand/useConversation';
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from '../../context/AuthContext';

function MessageContainer() {

    const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

    //const noChatSelected = true
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation ? (
                <NoChatSelected/>
            ) : (
                <>
                {/* Header */}
                <div className='bg-gray-700 px-4 py-2 mb-2'>
                    <span className='label-text'>To:</span> <span className='text-blue-500 font-bold'>{selectedConversation.fullName}</span>
                </div>

                <Messages />
                <MessageInput />
            </>
            )}
        </div>
    )
}

export default MessageContainer


const NoChatSelected = () => {
    const { authUser }= useAuthContext();
    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start a CONVO</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}