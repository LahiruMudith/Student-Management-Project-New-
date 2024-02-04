import {useEffect, useState} from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginpage from "../pages/LoginPage/Loginpage.jsx";
import Dashboard from "../pages/DashboardPage/Dashboard.jsx";

function App() {
    const [count, setCount] = useState(0)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const loginToken = localStorage.getItem('loginkey')
        if (loginToken) {
            setLoader(false)
        }
    }, []);


  return (
    <>
        {
            loader ?
                <Loginpage/>
                :
                <Dashboard/>
        }

    </>
  )
}

export default App
