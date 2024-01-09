import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import { useUsers } from "../../store/useUsers";
import { usePosts } from "../../store/usePosts"

export default function Form() {
   const [postText, setPostText] = useState("");

   const { users } = useUsers();
   const { push, posts } = usePosts();

   const addNewPost = () => {
      push(2, postText, users[0].name);
      setPostText("");
   };

   return (
      <div className={styles.form}>
         <div className={styles.form__information}>
            <img
               src="img/user.png"
               className={styles.form__information__icon}
            />
            <input
               type="text"
               className={styles.form__information__input}
               onChange={(e) => {
                  setPostText(e.target.value);
               }}
               value={postText}
               placeholder="New Stando Power?!"
            />
         </div>
         <button
            onClick={addNewPost}
            className={
               postText
                  ? styles.form__add__button__active
                  : styles.form__add__button__disabled
            }
            disabled={!postText}
         >
            Tweet
         </button>
      </div>
   );
}
