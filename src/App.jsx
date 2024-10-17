import './App.css'
import Counter from './Counter'

function App() {

  function handleClick(){
    alert('button click')
  }

  const handleClick2 = ()=>{
    alert('Button two click')
  }

  const addToFive =(num) =>{
    alert(num + 5)
  }

  return (
    <>
    
      <h1>React Core Concept 2</h1>
      <h3>Different Way To Handle Event</h3>
      <button onClick={handleClick} >Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={ () => { alert('third button click') } }>Click 3</button>
      <button onClick={ () => addToFive(3)}>Click 4</button>

      <Counter></Counter>
    </>
  )
}

export default App
