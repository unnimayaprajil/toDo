import { useState } from 'react'
import Todo from './components/Todo'
import { ToastContainer } from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';
const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <>
     <Todo/>
     
    </>
  )
}

export default App
