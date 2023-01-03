import { FormEvent } from "react";
import styles from '@/styles/newmessageform.module.css';

interface PropsType {
  newMessage: string;
  handleNewMessageChange: (event: FormEvent<HTMLInputElement>) => void;
  handleStartTyping: () => void;
  handleStopTyping: () => void;
  handleSendMessage: (event: any) => void;
}

const NewMessageForm = ({
    newMessage,
    handleNewMessageChange,
    handleStartTyping,
    handleStopTyping,
    handleSendMessage,
}: PropsType) => {
    return (
      <form className={styles.newMessageForm}>
        <input
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Aa"
          className={styles.newMessageInputField}
          onKeyPress={handleStartTyping}
          onKeyUp={handleStopTyping}
        />
        <button
          type="submit"
          onClick={handleSendMessage}
          className={styles.sendMessageButton}
        >
          Send
        </button>
      </form>
    );
};
  
export default NewMessageForm;
  