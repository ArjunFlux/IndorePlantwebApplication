import React from 'react'
import { FaCannabis } from "react-icons/fa";
import { GiPlantWatering } from "react-icons/gi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { MdOpacity } from 'react-icons/md';
import {Link} from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger);
function SecondPage() {
    const HeaderTag1 = useRef(null);
    const HeaderTag2 = useRef(null);
    const ImageTag1 = useRef(null);
    const ImageTag2 = useRef(null);
    const ImageTag3 = useRef(null);
    const ImageTag4 = useRef(null);
    useGSAP(()=>{
        gsap.from(HeaderTag1.current,{
            x:-100,
            opacity:0,
            duration:2,
            scrollTrigger:{
                trigger:HeaderTag1.current,
                scrub:2,
                start:"top 70%",
                end:"top 40%",
            }
        });
        gsap.from(HeaderTag2.current,{
            y:100,
            opacity:0,
            duration:2,
            scrollTrigger:{
                trigger:HeaderTag2.current,
                scrub:2,
                start:"top 70%",
                end:"top 50%",
            }
        });
        gsap.from(ImageTag1.current,{
            x:100,
            opacity:0,
            duration:3,
            scrollTrigger:{
                trigger:ImageTag1.current,
                scrub:2,
                start:"top 70%",
                end:"top 30%",
            }
        });
        gsap.from(ImageTag2.current,{
            y:30,
            yoyo:true,
            duration:2,
            repeat:Infinity,
        });
        gsap.from(ImageTag3.current,{
            y:20,
            yoyo:true,
            duration:2,
            repeat:Infinity,
        })
        gsap.from(ImageTag4.current,{
            x:30,
            yoyo:true,
            duration:2,
            repeat:Infinity,
        })
    },{})
  return (
    <div className='h-[90vh] w-full overflow-hidden border-b-2 mt-20'>
      <div className='flex justify-end items-end'>
        <img src='public/plant-png-photos-8.png' alt='Photo of a plant' className='h-[200px] w-[100px] rotate-240 mt-[-45px]' ref={ImageTag1}/>
      </div>
      <div className='relative top-[-15%] left-[45%]'>
        <div ref={HeaderTag1}>
            <p className='text-4xl text-yellow-500 font-bold font-serif italic'>About Us</p>
            <p className='mt-2 ml-[-50px] text-white font-bold font-serif italic'>Follow the instruction for more</p>
        </div>
        <div className='relative top-[-70px] left-[-40%]'>
            <GiPlantWatering size={40} ref={ImageTag3} className='transform hover:shadow-xl hover:rounded-xl hover:shadow-green-600 transition duration-100 cursor-pointer'/>
        </div>
        <img src='public/potted-plant-white-pot_1029445-10490-removebg-preview.png' alt='Photo of our plant' className='relative top-[-10px] left-[-46%] h-[350px] filter drop-shadow-xl drop-shadow-black rounded-lg transform hover:drop-shadow-xl hover:drop-shadow-green-600 transition duration-150 cursor-pointer' ref={ImageTag2}/>
        <div ref={HeaderTag2}>
            <p className='mt-[-280px] ml-[-35px] text-3xl text-white font-serif italic font-bold'>Make your <span className='text-yellow-400'>origanic</span> <br/>garden</p>
            <p className='ml-[-35px] text-white font-serif italic pr-3 pt-3'>At IndorePlant, we believe every home deserves a touch of greenery.<br/> Founded in 2009, our mission is to make indoor gardening simple, sustainable, and joyful.<br/> From air-purifying snake plants to statement fiddle-leaf figs, we curate plants<br/> that thrive in your space—no green thumb required!</p>
            <Link to={"/orders"}><button className='mt-5 px-5 py-3 ml-[-35px] bg-yellow-500 font-bold text-white font-serif italic rounded-xl cursor-pointer'>Order Now</button></Link>
        </div>
        <FaCannabis size={30} className='relative top-20 left-[40%] rotate-12 transform hover:drop-shadow-xl hover:drop-shadow-green-600 transition duration-150 cursor-pointer' ref={ImageTag4}/>
      </div>
    </div>
  )
}

export default SecondPage
