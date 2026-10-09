import { useEffect, useState } from "react";

function UseEffectComponent() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Running");
            setCount((previousCount) => previousCount + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Timer stopped");
        };

    }, []);

    return (
        <div>
            <h1>useEffect Timer Example</h1>
            <h2>Count: {count}</h2>
        </div>
    );
}
export default UseEffectComponent;