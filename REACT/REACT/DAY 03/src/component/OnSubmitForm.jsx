import { useState } from "react";

export default function OnSubmitForm() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedName(name);
        setName("");
        alert(`Form submitted with name: ${name}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <h2>{submittedName}</h2>
        </div>
    );
}