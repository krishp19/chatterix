/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p--4 h-screen flex items-center justify-center'>
        {/*<Login/>*/}
        <Home/>
        {/*<SignUp/>*/}
      </div>
    </>
  )
}

export default App
