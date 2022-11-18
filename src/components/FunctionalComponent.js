import { useState } from "react";
import Peach from "../assets/Peach.jpg"

const FunctionalComponent = () =>
{
    const[showMain, setDisplay] = useState(true);

    const switchMain = () => {
        setDisplay(!showMain);
    }

    return (
        <div style={{position: "absolute", transform: "translate(-50%, -50%)", top: "50%", left: "50%"}}>
            <h1 onClick={(switchMain)}>Click me to change the content below</h1>
            <div style={{width: "50rem"}}>
                {showMain ? <p>Funny text here</p> : <img src={Peach} alt="Peach" style={{width: "100%"}}/>}
            </div>
        </div>
    );
}
export default FunctionalComponent;