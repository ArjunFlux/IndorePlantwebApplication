import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import { FaTruck } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { PiPottedPlantFill } from "react-icons/pi";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
function FirstPage() {
  const MainDivTagRef = useRef(null);
  useGSAP(() => {
    gsap.from(MainDivTagRef.current.querySelectorAll("#MainTagDiv"), {
      x:-100,
      scale:0,
      stagger:0.3,
      duration: 0.5,
      scrollTrigger: {
        trigger: MainDivTagRef.current.querySelectorAll("#MainTagDiv"),
        scrub: 2,
        start: "top 70%",
        end: "top 35%",
      },
    });
  }, {});
  return (
    <div className="h-[35vh] mt-[130px] w-full bg-white overflow-hidden">
      <div
        className="flex justify-center items-center gap-[25px] px-[30px] pt-[30px]"
        ref={MainDivTagRef}
      >
        <div
          className="border-2 h-[25vh] w-[20vw] rounded-[10px]"
          id="MainTagDiv"
        >
          <FaTruck size={50} className="ml-[30px] mt-[20px] text-green-900" />
          <p className="relative top-[-30%] left-[45%] text-[25px] text-green-900">
            Fast
            <br /> Delivery
          </p>
          <p className="relative top-[-25%] p-2 text-black">
            Lightning-fast deliveries straight to your doorstep – IndorePlant
            brings greenery to you in no time!
          </p>
        </div>
        <div
          className="border-2 h-[25vh] w-[20vw] rounded-[10px]"
          id="MainTagDiv"
        >
          <FaHeadphonesAlt
            size={50}
            className="ml-[30px] mt-[20px] text-green-900"
          />
          <p className="relative top-[-30%] left-[35%] text-[25px] text-green-900">
            Great Customer
            <br />
            Service{" "}
          </p>
          <p className="relative top-[-25%] p-2 text-black">
            Your green concerns, our quick solutions – IndorePlant’s support is
            always blooming!
          </p>
        </div>
        <div
          className="border-2 h-[25vh] w-[20vw] rounded-[10px]"
          id="MainTagDiv"
        >
          <PiPottedPlantFill
            size={50}
            className="ml-[30px] mt-[20px] text-green-900"
          />
          <p className="relative top-[-30%] left-[45%] text-[25px] text-green-900">
            Original
            <br />
            Plants{" "}
          </p>
          <p className="relative top-[-25%] p-2 text-black">
            Rooted in care, growing with trust – IndorePlant’s support is just a
            call away!
          </p>
        </div>
        <div
          className="border-2 h-[25vh] w-[20vw] rounded-[10px]"
          id="MainTagDiv"
        >
          <RiMoneyRupeeCircleFill
            size={50}
            className="ml-[30px] mt-[20px] text-green-900"
          />
          <p className="relative top-[-30%] left-[45%] text-[25px] text-green-900">
            Affordable
            <br />
            Price{" "}
          </p>
          <p className="relative top-[-25%] p-2 text-black">
            Nature’s beauty shouldn’t cost a fortune – shop smart with
            IndorePlant’s pocket-friendly green collection!
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
