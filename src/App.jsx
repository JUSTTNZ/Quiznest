
import './App.css'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import Login from './pages/Login'
import { Addition } from './pages/Addition'
import { Score } from './components/score'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/home/add' element={<Addition/>}/>
          <Route path='/score' element={<Score/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
