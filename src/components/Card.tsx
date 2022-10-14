import React, { FC } from "react";
import Arc from "./arc";

interface Details {
  title: string;
  price: string;
  profit: number;
  val: number;
  serial: number;
  icon: string;
  pairs: {
    firstPair: string;
    secondPair: string;
    thirdPair: string;
  };
}


const Card: FC<Details> = ({
  title,
  price,
  profit,
  val,
  serial,
  icon,
  pairs,
}) => {
  return (
    <div className="w-[290.74px] h-[350.08px] ">
      <div className="rounded-full bg-color1 h-28 w-28 relative left-[5.6rem] top-[3rem]  z-20 flex flex-col justify-center items-center">
        <img src={icon} />
      </div>
      <div className="flex flex-col justify-center items-center h-0 ">
        <Arc serial={serial} ></Arc>
      </div>
      <div className=" bg-color1  h-[350.08px] w-[290.74px] rounded-xl flex flex-col justify-center items-center">
        <span className="text-text1 w-56 h-9 text-center">{title}</span>
        <div className="bg-color3  text-center w-60 h-8 space-x-1 rounded-xl flex justify-between items-center ">
          <span className="relative left-[1.5rem] text-color5 basis-3/4">
            $ {(price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","))}
          </span>
          <span className="relative right-[1px] flex justify-end items-center text-xs text-negative  w-[68.52px] h-[31px] text-color4 basis-1/4">
            {profit}%
          </span>
        </div>
        <span className="text-text1 text-center w-56 h-9 flex justify-center relative items-center">
          Price
        </span>
        <div className="bg-color3 text-white text-center w-60 h-8 space-x-1 rounded-xl flex items-center justify-center">
          <span>${val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span>
        </div>
        <span className="text-text1 text-center w-56 h-9 flex justify-center items-center">
          TVL
        </span>
        <div className="bg-color3 text-white text-center  w-[7.5rem] h-[2.5rem] space-x-1 rounded-xl flex items-center justify-around">
          <img src={pairs.firstPair} alt="first source" />
          <img src={pairs.secondPair} alt="first source" />
          <img src={pairs.thirdPair} alt="first source" />
        </div>
      </div>
    </div>
  );
};

export default Card;
