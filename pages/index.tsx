import { useState, FormEvent } from "react";
//import { useRouter } from 'next/router';
import ChatRoom from "@/components/chatroom";
import Layout from "@/components/layout";
import styles from '@/styles/home.module.css';

export default function Home() {
   const [roomName, setRoomName] = useState("");
   const [roomid, setRoomId] = useState('');
   //const router = useRouter();

   const handleRoomNameChange = (event: FormEvent<HTMLInputElement>) => {
      setRoomName(event.currentTarget.value.replace(/<\/?[^>]*>/g, ""));
   };
  
   return (
      <Layout>
         <>
         {roomid &&
         <ChatRoom
            roomid={roomid}
         /> 
         }
         {!roomid &&
         <div className={styles.homeContainer}>
            <h1 style={{textAlign: 'center'}}>Chat Applications with Socket.IO</h1>
            <input
               type="text"
               placeholder="Room"
               value={roomName}
               onChange={handleRoomNameChange}
               className={styles.textInputField}
               />
            <div className={styles.enterRoomButton} onClick={() => setRoomId(roomName)}>
                Join room
            </div>   
            <div className={styles.remarkContainer}>
            There are many ways to achieve real-time content updates on the web. Long-polling, web sockets and server-side events are popular ways for real-time updates. With long-polling an HTTP request is made to the server at a predefined interval. In server-side events, the browser’s event source API is used to open a channel of communication between the client and the server for updates to flow from the server to the client. The web socket protocol opens a two-way communication channel between the client and the server to allow updates to move in both ways.
            <p>
            This real-time chat application is built with <a href='https://nextjs.org/' target='_blank' rel='noreferrer'><strong>Next.js</strong></a> using <a href='https://socket.io/' target='_blank' rel='noreferrer'><strong>Socket.IO</strong></a> for demonstrations.
            </p>
            </div>
         </div>
         }
         </>
      </Layout>
   );
}    