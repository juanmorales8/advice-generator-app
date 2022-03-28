import { AdviceCard } from "@components/AdviceCard";
import "@styles/CardContainer.scss";

function CardContainer(){
    return(
        <div className="Card-container">
            <AdviceCard/>
        </div>
    )
}

export {CardContainer};