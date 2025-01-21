import { useState } from "react";

function StateExample3(){
    const[color, setcolor] = useState("green");
    return (
        <div>
            <input type="radio" name="color" onChange={() => setcolor("yellow")}/>
            {"yellow"}
            <br />
            <input type="radio" name="color" onChange={() => setcolor("red")}/>
            {"red"}
            <br />
            <input type="radio" name="color" onChange={() => setcolor("pink")}/>
            {"pink"}
            <br />
            <p style={{color: color}}> this is the text content for the display </p>
            
        </div>
    );
}
export default StateExample3;