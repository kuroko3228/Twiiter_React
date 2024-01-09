import { titlesDatas } from "../../../config";
import TitleBlock from "../../TitleBlock/TitleBlock";

export default function NotificationsAll() {
    const componentName = "NotificationsAll";
    return(
        <div style={{ width: "70%", margin: "50px auto"}}>
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
    )
}