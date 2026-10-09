import { useRef } from "react";

function UseRefComponent() {
    const timerRef = useRef(null);

    function startTimer() {
        timerRef.current = setInterval(() => {
            console.log("Running...");
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerRef.current);
    }

    return (
        <div>
            <h1>useRef Example</h1>
            <button onClick={startTimer}>
                Start
            </button>

            <button onClick={stopTimer}>
                Stop
            </button>
            <p>check your console</p>
        </div>
    );
}

export default UseRefComponent;
// useRef vs useState

// | useState                  | useRef                            |
// | ------------------------- | --------------------------------- |
// | Stores state              | Stores a mutable reference        |
// | Updating causes re-render | Updating does not cause re-render |
// | Used for UI data          | Often used for DOM references     |
// | setState()                | ref.current                       |