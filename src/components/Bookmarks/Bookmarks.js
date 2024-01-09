import { titlesDatas } from "../../config";
import Header from "../Header/Header";
import TitleBlock from "../TitleBlock/TitleBlock";

export default function Bookmarks() {
   const componentName = "Bookmarks";
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
      </div>
   );
}
