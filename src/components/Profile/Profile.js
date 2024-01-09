import { usePosts } from "../../store/usePosts";
import { useUsers } from "../../store/useUsers";
import styles from "./Profile.module.css";

import { LiaCalendar } from "react-icons/lia";

export default function Profile() {
   const { users } = useUsers();
   const { posts } = usePosts();
   console.log(users);
   return (
      <div className={styles.profile}>
         <div className={styles.profile__header}>
            <h2 className={styles.profile__title}>{users[0].name}</h2>
            <p className={styles.profile__quantity__posts}>
               {posts.length} posts
            </p>
         </div>
         <div className={styles.profile__data}>
            <div className={styles.decorativ__block}></div>
            <div className={styles.profile__data__icon}>
               <img src="img/user.png" />
            </div>
            <div className={styles.profile__user__information}>
               <h3>{users[0].name}</h3>
               <p>{users[0].login}</p>
               <div className={styles.profile__log_up__date}>
                  <LiaCalendar />
                  <span>Joined {users[0].dateOfLogUp}</span>
               </div>
            </div>
         </div>
      </div>
   );
}
