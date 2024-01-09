import { titlesDatas } from "../../config";
import Header from "../Header/Header";
import TitleBlock from "../TitleBlock/TitleBlock";
import styles from "./Messages.module.css";

export default function Messages() {
   const componentName = "Messages";
   return (
      <div style={{ width: "50%" }}>
         <Header title={componentName} />
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
         <button className={styles.messages__button}>Write a message</button>
      </div>
   );
}
