import { useEffect, useState } from "react";

export default function UseEffectHook() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted");
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}
