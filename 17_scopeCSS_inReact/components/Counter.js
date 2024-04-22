import { useState } from "react";
import styles from "./Counter.module.css";



export const Counter = ({ counterName, children: AppleCounter }) => {
  const [count, setCount] = useState(0);
  console.log(AppleCounter);
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className={styles['text-XL']}>{count}</h1>
      <button
        className={[styles.button, styles.textXL].join(' ')}
        onClick={() => {
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
        }}
      >
        Increase count
      </button>
      {AppleCounter}
    </div>
  );
};
