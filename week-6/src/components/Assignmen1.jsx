import { useMemo } from "react";
import { useState } from "react";

const Assignmen1 = () => {
  const [input, setInput] = useState(0);
  const expensiveValue = useMemo(() => {
    let val = 1;
    for (let i = 1; i <= input; i++) {
      val *= i;
    }
    return val;
  }, [input]);
  console.log("re-rendered");
  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
};

export default Assignmen1;
