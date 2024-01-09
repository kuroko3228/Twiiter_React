import styles from "./TrendsColumn.module.css"

import { FiSearch } from "react-icons/fi";

import { trends } from "../../config"
import TrendItem from "./TrendItem/TrendItem"

export default function TrendsColumn () {
    return (
            <div className={styles.trends}>
                <div className={styles.trends__search}>
                    <div className={styles.trends__search__icon}><FiSearch /></div>
                    <input type="text" className={styles.trends__search__input}  placeholder="Search"/>
                
                </div>
                <div className={styles.trends__items}>
                    <h2 className={styles.trends__title}>your favorite state</h2>
                    {trends.map(trendElement => {
                        return(
                            <TrendItem key={trendElement.title} placeOfTrend={trendElement.placeOfTrend} title={trendElement.title} quantityPosts={trendElement.quantityPosts} />
                        )
                    })}
                </div>
            </div>
    )
}