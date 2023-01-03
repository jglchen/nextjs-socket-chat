import Image from 'next/image';
import TypingAnimation from "./typinganimation";
import styles from '@/styles/typingmessage.module.css';
import { User } from '@/lib/types';

const TypingMessage = ({ user }: { user: User}) => {
    return (
      <div className={styles.messageItem}>
        <div className={styles.messageAvatarContainer}>
          <Image
            src={user.picture}
            alt={user.name}
            width={28}
            height={28}
            className={styles.messageAvatar}
          />
        </div>
  
        <TypingAnimation></TypingAnimation>
      </div>
    );
  };
  
  export default TypingMessage;
  