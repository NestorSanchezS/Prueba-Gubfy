import { useState } from 'react'
import './App.css'
import { CustomButton } from './assets/components/CustomButton';

function App() {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(count + 1);
  };

  const decrement = (): void => {
    setCount(count - 1);
  };


  return (
    <>
      <div>
        <p>Número: {count}</p>
        <CustomButton onClick={increment} text="Incrementar" />
        <CustomButton onClick={decrement} text="Decrementar" />
      </div>

    </>
  )
}

export default App
