import { Link, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./Notifications.module.css";
import NotificationsAll from "./NotificationsAll/NotificationsAll";
import NotificationsVerified from "./NotificationsVerified/NotificationsVerified";
import NotificationsMentions from "./NotificationsMentions/NotificationsMentions";


export default function Notifications() {
   return (
      <div className={styles.notifications}>
         <Header title="Notifications" />
         <div className={styles.notifications__content}>
            <Link to="" className={styles.notifications__content__link}>
               All
            </Link>
            <Link to="verified" className={styles.notifications__content__link}>
               Verified
            </Link>
            <Link to="mentions" className={styles.notifications__content__link}>
               Mentions
            </Link>
         </div>
         <Routes>
            <Route path="/" element={<NotificationsAll />} />
            <Route path="verified" element={<NotificationsVerified/>} />
            <Route path="mentions" element={<NotificationsMentions />} />
         </Routes>
      </div>
   );
}
