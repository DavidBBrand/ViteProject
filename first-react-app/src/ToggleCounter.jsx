import { useState } from "react";

export default function ToggleCounter() {
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);
    const toggleIsHappy = () => setIsHappy(!isHappy);
    const incrementCount = () => setCount(count + 1);
    return (
        <div>
        <p className="Toggler" onClick={toggleIsHappy}>{isHappy ? ":)" : ":(" }</p>
        <p>{count}</p>
        <button onClick={incrementCount}>+</button>
        </div>
    )
}