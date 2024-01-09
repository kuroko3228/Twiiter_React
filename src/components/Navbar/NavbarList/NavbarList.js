import styles from "./NavbarList.module.css";

import { BiHomeCircle, BiCheckCircle } from "react-icons/bi";
import { FiSearch, FiBookmark } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { HiOutlineMail, HiOutlineUsers, HiOutlineUser } from "react-icons/hi";
import { RiFileList2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const navbarListElements = [
    { icon: <BiHomeCircle />, title: "Home" },
    { icon: <FiSearch />, title: "Explore" },
    { icon: <GrNotification />, title: "Notifications" },
    { icon: <HiOutlineMail />, title: "Messages" },
    { icon: <RiFileList2Line />, title: "Lists" },
    { icon: <FiBookmark />, title: "Bookmarks" },
    { icon: <HiOutlineUsers />, title: "Communities" },
    { icon: <HiOutlineUser />, title: "Profile" },
 ];

export default function NavbarList() {
   return (
    <div className={styles.navbar__items}>
        {navbarListElements.map((listElement) => {
            return(
                <div key={listElement.title} className={styles.navbar__items__element}>
                    <div className={styles.element__icon}>{listElement.icon}</div>
                    <Link to={`/${listElement.title.toLowerCase()}`} className={styles.element__link}>{listElement.title}</Link>
                </div>
            )
        })}
    </div>
   );
}
