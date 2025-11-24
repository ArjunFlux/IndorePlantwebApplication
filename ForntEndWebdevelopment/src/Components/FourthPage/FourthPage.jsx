import React from "react";
import { SiComma } from "react-icons/si";
import Slider from "react-slick";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function FourthPage() {
    const headerTagRef = useRef(null);
    const ImageTagRef = useRef(null);
    const SliderTagRef = useRef(null);
    useGSAP(()=>{
        gsap.from(headerTagRef.current,{
            scaleX:0,
            scrollTrigger:{
                trigger:headerTagRef.current,
                scrub:2,
                start:"top 70%",
                end:"top 50%",
            }
        });
        gsap.from(ImageTagRef.current,{
            x:-100,
            opacity:0,
            scrollTrigger:{
                trigger:ImageTagRef.current,
                scrub:2,
                start:"top 70%",
                end:"top 50%",
            }
        });
        gsap.from(SliderTagRef.current,{
            scale:0,
            opacity:0,
            scrollTrigger:{
                trigger:SliderTagRef.current,
                scrub:2,
                start:"top 80%",
                end:"top 60%",
            }
        })
    },{})
  const data = [
    {
      NameOfTheCustomer: "Aman Singh",
      review:
        "The packaging was secure, and each plant was well-protected. They’ve been thriving in my home, and I’m really happy with my purchase!",
      JobPosition: "Designer",
    },
    {
      NameOfTheCustomer: "Kartavya Raj",
      review:
        "I’ve bought multiple plants from them, including some rare varieties, and they’ve all been in great shape.Highly recommend for plant lovers!",
      JobPosition: "Ethical Hacker",
    },
    {
      NameOfTheCustomer: "Sumeet Singh",
      review:
        "I gifted a beautiful succulent arrangement from Indore Plant to a friend, and they loved it! The plants were neatly arranged and looked stunning",
      JobPosition: "Business analytics",
    },
    {
      NameOfTheCustomer: "krrish Sharma",
      review:
        "When I had a small issue with one plant, their customer support was responsive and helpful. A trustworthy seller!  , Will visit again",
      JobPosition: "Environmentalist",
    },
  ];
  const settings = {
    dots: false,
    size:20,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="h-[90vh] w-full border-b-2 mt-20">
      <img
        src="/plant-png-photos-8.png"
        alt="Photo of our plants"
        className="h-[190px] w-[80px] rotate-140 relative top-[-30px] left-[-10px]"ref={ImageTagRef}
      />
      <div className="pl-[39%] relative top-[-150px]" ref={headerTagRef}>
        <p className="text-4xl text-yellow-300 font-serif italic font-bold">
          Customer Review
        </p>
        <p className="text-[13px] text-white font-serif italic font-bold ml-15 pt-2">
          Follow our instructions for more
        </p>
      </div>
      <div className="w-[1250px] m-auto">
        <div ref={SliderTagRef}>
          <Slider {...settings}>
            {data.map((data, index) => (
              <div
                key={index}
                className="border-2 h-[30vh] w-[35vw] py-10 m-auto bg-green-900 transform hover:scale-90 hover:shadow-xl hover:shadow-green-500 transition duration-400 cursor-pointer"
              >
                <div>
                  <p className="text-white font-serif italic font-bold p-2 mt-[-20px]">
                    {data.review}
                  </p>
                </div>
                <div className=" m-5 flex gap-2 text-yellow-400 text-xl">
                  <img src="/Photo1.webp" className="h-[50px]" />
                  <p>{data.NameOfTheCustomer}</p>
                </div>
                <p className="ml-[80px] mt-[-35px] text-white text-[15px]">{data.JobPosition}</p>
                <SiComma className="float-right mt-[-40px] mr-5 text-white" size={30}/>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
