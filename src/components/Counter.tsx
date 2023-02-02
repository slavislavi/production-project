import { useState } from "react";
import styles from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <button className={styles.btn} onClick={increment}>INC</button>
      <button className={styles.btn} onClick={decrement}>DEC</button>
      <pre>{count}</pre>
    </div>
  );
};
