import { useState } from "react";

export default function BooleanState() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && <h2>Now you see me!</h2>}
    </div>
  );
}