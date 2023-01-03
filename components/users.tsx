import UserAvatar from "./useravatar";
import styles from '@/styles/users.module.css';
import { User } from '@/lib/types';

const Users = ({ users }: { users: User[]}) => {
    return users.length > 0 ? (
      <div>
        <h2>Also in this room:</h2>
        <ul className={styles.userList}>
          {users.map((user, index) => (
            <li key={index} className={styles.userBox}>
              <span>{user.name}</span>
              <UserAvatar user={user}></UserAvatar>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div>There is no one else in this room</div>
    );
};
  
export default Users;
  