import styles from "./ListsHeader.module.css";

import { FiSearch } from "react-icons/fi";
import { MdOutlinePlaylistAdd } from "react-icons/md";

export default function ListsHeader() {
   return (
      <div className={styles.lists__header}>
         <div className={styles.lists__header__search}>
            <div className={styles.search__icon}>
               <FiSearch />
            </div>
            <input
               type="text"
               className={styles.search__input}
               placeholder="Search Lists"
            />
         </div>
         <div className={styles.lists__header__icon}>
            <MdOutlinePlaylistAdd />
         </div>
      </div>
   );
}
