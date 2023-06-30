
import { useState } from 'react'
import {CustomButton} from '../components/CustomButton';

export const Count = () => {
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
          <h1>Counter App</h1>
          <h1 style={{fontSize:'120px', marginTop: '6px'}}>{count}</h1>
          <CustomButton onClick={increment} text="Incrementar" />
          <CustomButton onClick={decrement} text="Decrementar" />
        </div>
  
      </>
  )
}
