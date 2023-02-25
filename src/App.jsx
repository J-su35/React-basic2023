import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyButton from './components/MyButton'
import MyProfile from './components/MyProfile'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Click Button below")
  const [ifTrue, setTrue] = useState(true)

  const user = {
    firstName: "Jenny",
    lastName: "Doe",
    image: "https://dcarlbom.com/wp-content/uploads/photoshop-jasper-ai-blonde-woman-hero.jpg"

  }

  const products = [
    {title: 'Cabbage', id: 1},
    {title: 'Garlic', id: 2},
    {title: 'Apple', id: 3},
  ]

  function handleIncreaseClick() {
    setCount(count + 1)
  }

  function handleDecreaseClick() {
    setCount(count - 1)
  }

  return (
    // <div className="App">
    <>
      {/* <h1 style={{color:'red', border: '1px solid black'}}>Welcome to my app</h1> */}
      <h1>Welcome to my App</h1>
      <MyProfile data={user} />
      {/* <p>Hello I am {user.firstName} {user.lastName}</p>
      <img src={user.image} width="150" height="150" alt="woman picture" /> */}
      {name}
      <p>{count}</p>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
      <MyButton />
      {/* Ternary Operator */}
      {ifTrue ? "Yes, it's true" : "No, it's false"}
      <ul>
        {products.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      
    </>
    // </div>
  )
}

export default App
