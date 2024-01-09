import styles from "./TrendItem.module.css"

export default function TrendItem ({ placeOfTrend, title, quantityPosts}) {
    return(
        <div className={styles.trend__item}>
            <p className={styles.trend__item__subtitle}>{placeOfTrend}</p>
            <h3 className={styles.trend__item__title}>{title}</h3>
            <p className={styles.trend__item__subtitle}>{quantityPosts}</p>
        </div>
    )
}