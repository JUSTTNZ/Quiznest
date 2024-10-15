
import './App.css'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import Login from './pages/Login'
import { Addition } from './pages/Addition'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/add' element={<Addition/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
