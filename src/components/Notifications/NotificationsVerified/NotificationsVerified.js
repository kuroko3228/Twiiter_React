import { titlesDatas } from "../../../config";
import TitleBlock from "../../TitleBlock/TitleBlock";
import styles from "./NotificationsVerified.module.css"

export default function NotificationsVerified() {
    const componentName = "NotificationsVerified";
    return (
        <div style={{ width: "70%", margin: "50px auto"}}>
            <img
               src="../img/veri.png"
               className={styles.notifications__verified__img}
            />
            {titlesDatas.map((titleData) => {
                if (titleData.componentName === componentName) {
                    return (
                        <TitleBlock
                            title={titleData.title}
                            subtitle={titleData.subtitle}
                        />
                    );
                }
            })}
        </div>
    );
}