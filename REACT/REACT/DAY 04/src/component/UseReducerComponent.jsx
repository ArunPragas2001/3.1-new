import { useReducer } from "react";
import Counter from "./Counter";


function UseReducerComponent() {

    const [state, dispatch] =
        useReducer(Counter, { count: 0 });

    return (
        <div>
            <h1>useReducer Example</h1>
            <h2>Count: {state.count}</h2>

            <button
                onClick={() =>
                    dispatch({ type: "increment" })
                }
            >
                +
            </button>

            <button
                onClick={() =>
                    dispatch({ type: "decrement" })
                }
            >
                -
            </button>

        </div>
    );
}

export default UseReducerComponent;