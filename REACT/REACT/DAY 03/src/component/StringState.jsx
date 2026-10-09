import { useState } from 'react';

export default function StringState() {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name}</h2>
    </div>
  );
}
