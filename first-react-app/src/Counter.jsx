import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0);
    console.log("COMPONENET HAS BEENEXECUTED AGAIN");
    console.log(`num: ${num}`);
    const changeNum = () => {
        setNum(num + 1);
        console.log("SET NUM HAS RUN!!!");
        console.log(`num: ${num}`);

    }
    
    return (
        <div>
            <p>The count is: {num} </p>
            <button onClick={changeNum}>Increment</button>
        </div>
    );
}

