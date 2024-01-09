import styles from "./Header.module.css"

export default function Header({ title }) {
    return(
        <div className={styles.header}>
            <h3 className={styles.header__title}>{title}</h3>
        </div>
    )
}