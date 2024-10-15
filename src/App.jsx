import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Subject from './pages/Subject'

function App() {
  const [count, setCount] = useState(()=> {
    
  })

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/subject' element={<Subject/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
