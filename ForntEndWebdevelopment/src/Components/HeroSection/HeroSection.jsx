import { RiPlantLine } from "react-icons/ri";
import { RiLeafLine } from "react-icons/ri";
import { PiFlowerTulipBold } from "react-icons/pi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { handlesuccess } from "../../../utli";
function HeroSection() {
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
  const Plant1TagRef = useRef(null);
  const Plant2TagRef = useRef(null);
  const Plant3TagRef = useRef(null);
  const Part1TagRef = useRef(null);
  const Part2TagRef = useRef(null);
  const [text] = useTypewriter({
    words: ["Echo","Hit","Blow","Note"],
    loop: {},
    typeSpeed: 400,
    deleteSpeed: 400,
  });
  useGSAP(() => {
    gsap.from(Plant1TagRef.current, {
      scale:0,
      yoyo: true,
      repeat: Infinity,
      duration: 1.5,
    });
    gsap.from(Plant2TagRef.current, {
      y: 30,
      yoyo: true,
      repeat: Infinity,
      duration: 1.5,
    });
    gsap.from(Plant3TagRef.current, {
      rotate: 360,
      yoyo: true,
      repeat: Infinity,
      duration: 3,
    });
    gsap.from(Part1TagRef.current, {
        y:-100,
        opacity:0,
        duration:2,
    });
    gsap.from(Part2TagRef.current, {
        x:-50,
        duration:2,
        yoyo:true,
        repeat:Infinity,
    });
  }, {});
  return (
    <div className="h-[90vh] w-full">
      <RiPlantLine
        size={50}
        className="text-green-800 relative top-[20%] left-[40%]"
        ref={Plant1TagRef}
      />
      <RiLeafLine
        size={50}
        className="text-green-800 relative top-[20%] left-[90%] rotate-5"
        ref={Plant2TagRef}
      />
      <PiFlowerTulipBold
        size={50}
        className="text-green-800 relative top-[60%] left-[50%] rotate-35"
        ref={Plant3TagRef}
      />
      <div className="flex mt-[60px]">
        <div ref={Part1TagRef}>
          <div className="relative top-[-30px]">
            <p className="text-6xl pl-20 text-white font-bold leading-16">
              {loggedInUser ? (
                <div>
                  <p className="text-4xl">Welcome <span className="text-yellow-400">{loggedInUser} ,</span></p>
                </div>
              ):null}
              <span className="text-yellow-400">Plants</span> make a<br />{" "}
              positive <span className="text-yellow-400">{text}<Cursor/></span> on
              <br /> your environment
            </p>
            <p className="text-white font-serif italic pl-20 pt-10">
              Welcome to IndorePlants, your gateway to a greener lifestyle. We
              curate vibrant,
              <br /> air-purifying indoor plants that refresh your space and
              spirit.
              <br /> Explore our collection and let your home thrive in lush
              harmony !
            </p>
          </div>
          <div className="flex">
            <NavLink to={`/orders`}>
              <button className="border-2 border-yellow-500 bg-yellow-500 rounded-xl p-3 px-10 ml-[80px] flex text-white font-bold cursor-pointer">
              Shop Now <RiLeafLine className="relative top-1.5 left-2.5" />
            </button>
            </NavLink>
            <NavLink to={`/knowmore`}>
              <button className="border-2 rounded-xl p-3 px-10 ml-[30px] flex text-white font-bold cursor-pointer">
              Know More <RiLeafLine className="relative top-1.5 left-2.5" />
            </button>
            </NavLink>
          </div>
          <p className="ml-[80px] mt-7 font-serif italic text-white text-[12px]">
            You will get 30-days free trail
          </p>
          <div className="relative top-[50px] text-white">
            <FaFacebookF size={20} className="ml-[80px] cursor-pointer" />
            <FaXTwitter size={20} className="ml-[120px] mt-[-18px] cursor-pointer" />
            <FaInstagram size={20} className="ml-[160px] mt-[-20px] cursor-pointer" />
            <TiSocialLinkedin size={25} className="ml-[200px] mt-[-22px] cursor-pointer" />
          </div>
        </div>
        <img src="public/PhotoofPlant.webp" className="mt-[-130px] h-[80vh] w-[55vw] filter drop-shadow-2xl drop-shadow-green-700 rounded-lg" ref={Part2TagRef}/>
      </div>
    </div>
  );
}

export default HeroSection;
