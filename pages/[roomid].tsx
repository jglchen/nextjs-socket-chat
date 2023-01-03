/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef, FormEvent } from "react";
import { useRouter } from 'next/router';
import useChat from "@/lib/usechat";
import ChatMessage from "@/components/chatmessage";
import useTyping from "@/lib/usetyping";
import NewMessageForm from "@/components/newmessageform";
import TypingMessage from "@/components/typingmessage";
import Users from "@/components/users";
import UserAvatar from "@/components/useravatar";
import Layout from "@/components/layout";
import styles from '@/styles/chatroom.module.css';

export default function ChatRoom() {
    const router = useRouter();
    const { roomid } = router.query;
    const {
        messages,
        user,
        users,
        typingUsers,
        sendMessage,
        startTypingMessage,
        stopTypingMessage,
    } = useChat(roomid as string);
    const [newMessage, setNewMessage] = useState("");
    const [timeDiff, setTimeDiff] = useState(0);
    const scrollTarget = useRef(null);
    const { isTyping, startTyping, stopTyping, cancelTyping } = useTyping();

    useEffect(() => {
      const response = fetch('/api/currenttime')
      .then((response) => {
         return response.json();
      })
      .then((data) => {
        setTimeDiff(Date.now() - data.current);
      })
      .catch((error) => {
        //---
      })
    },[]);
    
    const handleNewMessageChange = (event: FormEvent<HTMLInputElement>) => {
      setNewMessage(event.currentTarget.value.replace(/<\/?[^>]*>/g, ""));
    };
  
    const handleSendMessage = (event: FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      cancelTyping();
      sendMessage(newMessage);
      setNewMessage("");
    };
  
    useEffect(() => {
      if (isTyping) startTypingMessage();
      else stopTypingMessage();
    }, [isTyping]);

    useEffect(() => {
		  // If the component has not been rendered yet, scrollTarget.current will be null
		  if (scrollTarget.current) {
			  (scrollTarget.current as any).scrollIntoView({ behavior: 'smooth' });
		  }
	  }, [messages.length + typingUsers.length]);
  
    return (
       <Layout>
          <div className={styles.chatRoomContainer}>
            <div className={styles.chatRoomTopBar}>
               <h1>Room: {roomid}</h1>
               {user && <UserAvatar user={user}></UserAvatar>}
            </div>
            <Users users={users}></Users>
            <div className={styles.messagesContainer}>
               <ol className={styles.messagesList}>
                  {messages.map((message, i) => {
                   message.sentAt += timeDiff;
                   return (
                   <li key={i}>
                      <ChatMessage message={message}></ChatMessage>
                   </li>
                  );})}
                  {typingUsers.map((user, i) => (
                    <li key={messages.length + i}>
                      <TypingMessage user={user}></TypingMessage>
                    </li>
                  ))}
               </ol>
               <div ref={scrollTarget}></div>
            </div>
            <NewMessageForm
               newMessage={newMessage}
               handleNewMessageChange={handleNewMessageChange}
               handleStartTyping={startTyping}
               handleStopTyping={stopTyping}
               handleSendMessage={handleSendMessage}
            ></NewMessageForm>
          </div> 
       </Layout>
    );


}    