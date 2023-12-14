import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from './counterSlice'

function App() {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter)
  console.log(counter);


  return (
    <div>
      <h3> Counter: {counter}</h3>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <br /> <br />
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  )
}

export default App
