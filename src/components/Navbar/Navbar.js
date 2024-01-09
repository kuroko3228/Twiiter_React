import { Link } from "react-router-dom";
import { useUsers } from "../../store/useUsers";
import styles from "./Navbar.module.css";
import NavbarList from "./NavbarList/NavbarList";

export default function Navbar() {
   const { users } = useUsers();

   return (
      <div className={styles.navbar}>
         <div className={styles.navbar__navigation}>
            <img
               src="img/twitter_logo.png"
               className={styles.navbar__Logo}
            ></img>
            <NavbarList />
            <div className={styles.navbar__button__post}>
               <Link to="/home" className={styles.navbar__link__post}>
                  Post
               </Link>
            </div>
         </div>
         <div className={styles.user__information}>
            <img
               src="img/user.png"
               className={styles.user__information__icon}
            />
            <div className={styles.user__infomation__data}>
               <h4>{users[0].name}</h4>
               <p>{users[0].login}</p>
            </div>
         </div>
      </div>
   );
}
