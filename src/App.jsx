import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';
function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // const [count, setCount] = useState(0)
  function handleIncrementClick() {
    dispatch(increment());

  }

  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleReset() {
    dispatch(reset());
  }
  function handleIncAmount(){
    dispatch (incrementByAmount(Number(amount)));
  }
  return (
    <div className='container'>
      <button style={{ background: 'gray' }} onClick={handleIncrementClick}>+</button>
      <p style={{ background: 'gray' }}>Count :{count}</p>
      <button style={{ background: 'gray' }} onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>

      <input type="Number" value={amount} placeholder='type amount'
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />
      <br />
      <button onClick={handleIncAmount}>Inc by Amount</button>
    </div>

  )
}

export default App
