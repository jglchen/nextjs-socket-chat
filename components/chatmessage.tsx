import UserAvatar from "./useravatar";
import getDateString from '@/lib/getdatestring';
import styles from '@/styles/chatmessage.module.css';
import { Message } from '@/lib/types';

const ChatMessage = ({ message }: {message: Message}) => {
    return (
      <div
        className={`${styles.messageItem} ${
          message.ownedByCurrentUser ? styles.myMessage : styles.receivedMessage
        }`}
      >
        {!message.ownedByCurrentUser && (
          <div className={styles.messageAvatarContainer}>
            <UserAvatar user={message.user}></UserAvatar>
          </div>
        )}
  
        <div className={styles.messageBodyContainer}>
          <div className={styles.messageUserName}>{!message.ownedByCurrentUser && message.user.name + ' @ '}{getDateString(message.sentAt)}</div>
          <div className={styles.messageBody}>{message.body}</div>
        </div>
      </div>
    );
};
  
export default ChatMessage;
  