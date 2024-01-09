import styles from "./TitleBlock.module.css";

export default function TitleBlock({ title, subtitle }) {
   return (
      <div className={styles.content}>
         <h2 className={styles.content__title}>{title}</h2>
         <p className={styles.content__subtitle}>{subtitle}</p>
      </div>
   );
}
