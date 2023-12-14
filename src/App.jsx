import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease, multiply } from './counterSlice'

function App() {

  const [input, setInput] = useState(0)


  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter)
  console.log(counter);

  function handleChange(e) {
    setInput(e.target.value)
  }

  return (
    <div>
      <h3> Counter: {counter}</h3>
      <input type="number" onChange={handleChange} value={input}/>
      <br />
      <button onClick={() => dispatch(increase())}>Increase</button>
      <br /> <br />
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <br /> <br />
      <button onClick={() => dispatch(multiply(input))}>Times Input</button>
    </div>
  )
}

export default App
