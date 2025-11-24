import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { handlesuccess } from "../../../utli";
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, NavLink } from 'react-router-dom';
function NavBar() {
  const [loggedInUser,setLoggedInUser] = useState('');
  const naviagte = useNavigate()
  useEffect(()=>{
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  },[])
  const  handleClick = (e) =>{
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    setTimeout(()=>{
      handlesuccess("Logout Successfull...")
      naviagte('/login')
    },1000);
  }
    const NavBarTagRef = useRef(null);
    const [IsOpen , setIsOpen] = useState(false);
    useEffect(()=>{
      const HandleScroller = ()=>{
        if(window.scrollY > 100){
          setIsOpen(true);
        }else{
          setIsOpen(false);
        }
      }
      window.addEventListener("scroll",HandleScroller);
    },[])
    useGSAP(()=>{
        gsap.from(NavBarTagRef.current,{
            x:-100,
            opacity:0,
            duration:2,
            scrollTrigger:{
              trigger:NavBarTagRef.current,
            },
        });
    },{})
    const [SelectedState,setSelectedState] = useState("Home");
  return (
    <div className={`h-[10vh] w-full ${IsOpen ? "bg-green-950 border-b-2 border-yellow-300" : "bg-transparent"} text-white font-bold font-serif italic top-0 left-0 z-50 fixed`} ref={NavBarTagRef}>
      <p className='font-extrabold text-white text-2xl  pl-[100px] pt-[25px] vast-shadow-regular-Navbar' >IndorePlants.</p>
      <div className='flex justify-end items-center relative top-[-35px] gap-[50px] pr-[50px]'>
        <NavLink to={`/`} className={SelectedState === "Home" ? "text-yellow-300" : "text-white"} onClick={()=>setSelectedState("Home")}>Home</NavLink>
        <NavLink to={`/aboutus`} className={SelectedState === "About" ? "text-yellow-300" : "text-white"} onClick={()=>setSelectedState("About")}>About Us</NavLink>
        <NavLink to={`/popular`} className={SelectedState === "Popular" ? "text-yellow-300" : "text-white"} onClick={()=>setSelectedState("Popular")}>Popular</NavLink>
        <NavLink to={`/review`} className={SelectedState === "Review" ? "text-yellow-300" : "text-white"} onClick={()=>setSelectedState("Review")}>Review</NavLink>
        {loggedInUser ? (
          <button className="border-1 bg-red-500 cursor-pointer px-5 py-2" onClick={handleClick}>Logout</button>
        ):<NavLink to={'/login'}><button className='border-1 bg-yellow-400 px-5 py-2 hover:rounded-2xl cursor-pointer'>Login</button></NavLink>}
      </div>
    </div>
  )
}

export default NavBar
