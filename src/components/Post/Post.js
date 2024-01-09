import styles from "./Post.module.css";

export default function Post({ post }) {
   return (
      <div className={styles.post}>
         <img src="img/user.png" className={styles.post__user__icon} />
         <div className={styles.post__data}>
            <p className={styles.post__authorname}>{post.authorName}</p>
            <p className={styles.post__publish__time}>{post.publishTime}</p>
            <h3 className={styles.post__text}>{post.postText}</h3>
         </div>
      </div>
   );
}
