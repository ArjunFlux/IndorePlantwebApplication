import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiLeafFill } from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
function FIfthPage() {
    const MoveTheDiv1 = useRef(null);
    const MoveTheDiv2 = useRef(null);
    useGSAP(()=>{
        gsap.from(MoveTheDiv2.current,{
            x:-100,
            opacity:0,
            scrollTrigger:{
                trigger:MoveTheDiv2.current,
                scrub:2,
                start:"top 70%",
                end:"top 56%",
            }
        })
    },{})
  return (
    <>
      <div className="h-[90vh] w-full">
        <div className="h-[65%] w-full bg-amber-200 relative top-[35%]">
          <div className="border-2 h-[30%] w-[65vw] relative top-[-15%] left-[17%] bg-green-900 px-5">
            <p className="text-3xl text-white p-4">
              <span className="text-yellow-300 font-black font-serif italic">
                Subscribe
              </span>{" "}
              to our newsletter
            </p>
            <div className="flex justify-center items-center gap-[20px]">
              <input
                type="email"
                placeholder="Enter your EmailID here : "
                className="w-[82%] h-[50px] border-2 p-3 bg-white rounded-xl"
              ></input>
              <button className="border-2 px-3 py-2.5 flex text-xl rounded-2xl bg-green-700 font-bold font-serif italic transform hover:translate-y-[-5px] hover:shadow-xs hover:shadow-green-400 transition duration-150 cursor-pointer">
                Subscribe
                <IoIosArrowForward
                  className="text-white relative top-[5px] left-[5px]"
                  size={20}
                />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center gap-7 cursor-pointer">
            <hr className="w-[40%] mx-10" />
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <TiSocialLinkedin />
            <hr className="w-[40%] mx-10" />
          </div>
          <div className="flex  pt-[50px]" ref={MoveTheDiv2}>
            <div className="relative left-[16%]">
              <RiLeafFill size={60} className="text-green-800" />
              <p className="font-bold font-serif italic text-green-800">
                IndorePlants.
              </p>
            </div>
            <div className="relative left-[32%]">
              <table>
                <td>
                    <tr className="font-bold text-xl font-serif italic text-black">Quick Links</tr>
                    <tr>Plants</tr>
                    <tr>Flowers</tr>
                    <tr>Gerdening</tr>
                    <tr>Seeds</tr>
                    <tr>Shipping</tr>
                </td>
                <td className="pl-[130px]">
                    <tr className="font-bold text-xl font-serif italic text-black">Popular Service</tr>
                    <tr>Tree Planting</tr>
                    <tr>Grass Cutting</tr>
                    <tr>Weeds Control</tr>
                    <tr>Project</tr>
                </td>
                <td className="pl-[130px]">
                    <tr className="font-bold text-xl font-serif italic text-black">Contact Us</tr>
                    <tr>+91 87 663 40 585<br/>
                        upadhyayparth3010@gmail.com
                    </tr><br/>
                    <tr>XYZ Bihar India<br/>
                    </tr>
                </td>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FIfthPage;
