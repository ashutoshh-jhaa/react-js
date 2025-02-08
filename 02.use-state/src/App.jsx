import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((count) => count - 1)}>
        Decrement
      </button>
    </>
  );
}

export default App;
