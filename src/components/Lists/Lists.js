import { titlesDatas } from "../../config";
import TitleBlock from "../TitleBlock/TitleBlock";
import ListsHeader from "./ListsHeader/ListsHeader";

export default function Lists() {
   const componentName = "Lists";
   return (
      <div style={{ width: "50%" }}>
         <ListsHeader />
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
