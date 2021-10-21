import { useState } from "react";

export const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>Counter{count}</h1>

      <button
        id="btn1"
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Add
      </button>

      <button
        id="btn1"
        onClick={() => {
          setcount(count - 1);
        }}
      >
        Subtract{" "}
      </button>

      <button
        id="btn1"
        onDoubleClick={() => {
          setcount(count * 2);
        }}
      >
        Multiplication{" "}
      </button>
    </div>
  );
};
