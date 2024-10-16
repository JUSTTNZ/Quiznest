
import './App.css'
import { NameProvider } from './Context/NameContext'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import { Home } from './pages/Home'
import Login from './pages/Login'
import { Addition } from './pages/Addition'
import { Score } from './components/score'
import Division from './pages/Division'

function App() {


  return (
    <>
      <NameProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/home' element={<Home/>}/>
            <Route path='/home/add' element={<Addition/>}/>
            <Route path='/home/division' element={<Division/>}/>
            <Route path='/score' element={<Score/>}/>
          </Routes>
        </Router>
      </NameProvider>
    </>
  )
}

export default App
