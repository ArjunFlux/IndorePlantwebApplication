import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
function ThirdPage() {
    const MainRef = useRef(null);
    const HeadingTag = useRef(null);
    useGSAP(()=>{
        gsap.from(HeadingTag.current,{
            opacity:0,
            x:-30,
            duration:1.5,
            scrollTrigger:{
                trigger:HeadingTag.current,
                scrub:2,
                start:"top 70%",
                end:"top 30%",
            }
        })
    },{})
  return (
    <div className="h-[90vh] w-full border-b-2 mt-20">
      <div className="text-center pt-5" ref={HeadingTag}>
        <p className="text-yellow-300 text-3xl font-serif italic font-bold">
          Popular Plants
        </p>
        <p className="text-yellow-300 font-serif italic font-bold">
          Follow Instruction  for more
        </p>
      </div>
      <div className="flex justify-between items-center px-[35px] pt-[50px] cursor-pointer">
        <div className="h-[43vh] w-[20vw] mt-[80px] shadow-xl shadow-black rounded-2xl bg-green-900 transform hover:translate-y-[-10px] hover:scale-90 hover:shadow-2xl hover:shadow-green-700 transition duration-300">
          <img
            src="public/photoofPlant1.webp"
            alt="Plant for sale"
            className="relative top-[-100px] pb-3"
          />
          <p className="relative top-[-140px] text-center text-yellow-300 pt-5 text-2xl font-serif italic">
            Dracaena trifasciata
          </p>
          <p className="relative top-[-140px] text-center text-white text-xl">
            Snake Plant{" "}
          </p>
          <img
            src="public/graph - Copy.png"
            alt="rating"
            className="h-[75px] relative top-[-150px] left-5"
          />
          <p className="relative top-[-150px] left-4 text-xl text-white">$5</p>
          <LuShoppingCart
            size={35}
            className="relative top-[-185px] left-[230px] text-yellow-400 transform hover:rounded-[20%] hover:translate-y-[-10px] hover:text-black transition duration-200"
          />
        </div>
        <div className="h-[43vh] w-[20vw] mt-[80px] shadow-xl shadow-black bg-green-900 rounded-2xl transform hover:translate-y-[-10px] hover:scale-90 hover:shadow-2xl hover:shadow-green-800 transition duration-300" id="div1">
          <img
            src="public/photoofPlant2.webp"
            alt="Plant for sale"
            className="relative top-[-100px] pb-3"
          />
          <p className="relative top-[-140px] text-center text-yellow-300 pt-5 text-2xl font-serif italic">
            Ficus lyrata
          </p>
          <p className="relative top-[-140px] text-center text-white text-xl">
            Fiddle-Leaf Fig{" "}
          </p>
          <img
            src="public/graph - Copy.png"
            alt="rating"
            className="h-[75px] relative top-[-150px] left-5"
          />
          <p className="relative top-[-150px] left-4 text-xl text-white">$7</p>
          <LuShoppingCart
            size={35}
            className="relative top-[-185px] left-[230px] text-yellow-400 transform hover:rounded-[20%]  hover:translate-y-[-10px] hover:text-black transition duration-200"
          />
        </div>
        <div className="h-[43vh] w-[20vw] mt-[80px] shadow-xl shadow-black bg-green-900 rounded-2xl transform hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-green-700 hover:scale-90 transition duration-300" id="div1">
          <img
            src="public/photoofPlant3.webp"
            alt="Plant for sale"
            className="relative top-[-100px] pb-3"
          />
          <p className="relative top-[-140px] text-center text-yellow-300 pt-5 text-2xl font-serif italic">
            Spathiphyllum wallisii
          </p>
          <p className="relative top-[-140px] text-center text-white text-xl">
            Peace Lily{" "}
          </p>
          <img
            src="public/graph - Copy.png"
            alt="rating"
            className="h-[75px] relative top-[-150px] left-5"
          />
          <p className="relative top-[-150px] left-4 text-xl text-white">$10</p>
          <LuShoppingCart
            size={35}
            className="relative top-[-185px] left-[230px] text-yellow-400 transform hover:rounded-[20%]  hover:translate-y-[-10px] hover:text-black transition duration-200"
          />
        </div>
        <div className="h-[43vh] w-[20vw] mt-[80px] shadow-xl shadow-black bg-green-900 rounded-2xl transform hover:translate-y-[-10px] hover:shadow-2xl hover:shadow-green-700 hover:scale-90 transition duration-300" id="div1">
          <img
            src="public/photoofPlant4.webp"
            alt="Plant for sale"
            className="relative top-[-100px] pb-3"
          />
          <p className="relative top-[-140px] text-center text-yellow-300 pt-5 text-2xl font-serif italic">
            Dypsis lutescens
          </p>
          <p className="relative top-[-140px] text-center text-white text-xl">
            Areca Palm{" "}
          </p>
          <img
            src="public/graph - Copy.png"
            alt="rating"
            className="h-[75px] relative top-[-150px] left-5"
          />
          <p className="relative top-[-150px] left-4 text-xl text-white">$8</p>
          <LuShoppingCart
            size={35}
            className="relative top-[-185px] left-[230px] text-yellow-400 transform hover:rounded-[20%] hover:text-black hover:translate-y-[-10px] transition duration-200"
          />
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
