import { useState } from "react";

export default function OnChangeEvent() {
    const [name, setName] = useState("");

    return (
        <div className='display'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <h2>{name}</h2>
        </div>
    );
}