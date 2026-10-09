import { useState } from "react";

export default function ConditionRendingWithTernary() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
            {isLoggedIn ? <h2>Welcome</h2> : <h2>Please Login</h2>}
        </div>
    );
}
