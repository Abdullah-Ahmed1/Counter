import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import store from './store'

function App() {
  const [count, setCount] = useState(0)
  store.dispatch({
      type:"bugAdded",
      payload  :{
        description: "bug1"
      }
  })
  console.log(store.getState())
  return (
    <div className="App">
        hello world
    </div>
  )
}

export default App
