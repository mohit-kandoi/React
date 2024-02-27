import { useState } from 'react';

function App() {
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  let [counter, setCounter] = useState(15);
  return (
    <>
      <h2>Hey There..!!</h2>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Add Value : {counter}</button>
      <button onClick={decreaseValue}>Decrease Value: {counter}</button>
    </>
  );
}

export default App;
