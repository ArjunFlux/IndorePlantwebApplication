import React from "react";
import { PlantData } from "../Data/data";
import { LuShoppingCart } from "react-icons/lu";

export default function Order() {
  return (
    <div className="h-[210vh] mt-25">
      <p className="vast-shadow-regular-Orders">Order Your Plants...</p>
      <p className="text-center text-white font-serif italic">Comes Let's dive into the world of plants</p>
      <div className="grid grid-cols-3">
        {PlantData.map((i) => (
          <div key={i.index}>
            <div className="h-[43vh] w-[20vw] mt-[90px] ml-20 shadow-xl shadow-black rounded-2xl bg-green-900 transform hover:translate-y-[-10px] cursor-pointer hover:scale-90 hover:shadow-2xl hover:shadow-green-700 transition duration-300">
              <img
                src={i.PhotoOfPlant}
                alt="Plant for sale"
                className="relative top-[-100px] pb-3"
              />
              <p className="relative top-[-140px] text-center text-yellow-300 pt-5 text-2xl font-serif italic">
                {i.NameOfPlant}
              </p>
              <img
                src="public/graph - Copy.png"
                alt="rating"
                className="h-[75px] relative top-[-150px] left-5"
              />
              <p className="relative top-[-150px] left-4 text-xl text-white">
                {i.PriceOfPlant}
              </p>
              <LuShoppingCart
                size={35}
                className="relative top-[-185px] left-[230px] text-yellow-400 transform hover:rounded-[20%] hover:translate-y-[-10px] hover:text-black transition duration-200"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
