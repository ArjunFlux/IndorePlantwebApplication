import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import HeroSection from './Components/HeroSection/HeroSection'
import FirstPage from './Components/FirstPage/FirstPage'
import SecondPage from './Components/SecondPage/SecondPage'
import ThirdPage from './Components/ThiredPage/ThirdPage'
import FourthPage from './Components/FourthPage/FourthPage'
import FIfthPage from './Components/FifthPagee/FIfthPage'
import {Routes , Route , useLocation} from 'react-router-dom'
import Order from '../Pages/Order'
import Login from '../Pages/Login'
import Signin from '../Pages/Signin'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const location = useLocation();
  const noFooterPages = ['/aboutus',"/review","/knowmore"];
  const showFooter = !noFooterPages.includes(location.pathname)
  return (
    <div>
      <ToastContainer/>
      <NavBar/>
      <Routes>
        <Route path='/' element={
          <>
              <HeroSection/>
              <FirstPage/>
              <SecondPage/>
              <ThirdPage/>
              <FourthPage/>
          </>
      }/>
      <Route path='/aboutus' element={<SecondPage/>}></Route>
      <Route path='/popular' element={<ThirdPage/>}></Route>
      <Route path="/review" element={<FourthPage/>}></Route>
      <Route path="/orders" element={<Order/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/knowmore" element={<SecondPage/>}></Route>
      </Routes>
      {showFooter && <FIfthPage/>}
    </div>
  )
}
export default App
