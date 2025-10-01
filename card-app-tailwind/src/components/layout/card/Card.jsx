import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRegHeart } from "react-icons/fa";
import { Button } from "../../button/Button";

const Card = ({ imgUrl, name, profile }) => {
  return (
    <div className="rounded-[1rem] bg-white  border-blue-300  border overflow-hidden max-w-fit  md:min-w-[380px]">
      <div
        className="relative before:content-[''] before:absolute before:top-0  before:w-full before:h-[80%] before:bg-blue-600
        pt-[2rem] pb-[1rem] aspect-video"
      >
        <div className="w-[150px] h-[150px] mx-auto rounded-full bg-white overflow-hidden relative border-[4px] border-blue-600 before:bg-blue-600">
          <img src={imgUrl} alt="user image" className="border-[4px] border-white" />
        </div>
      </div>
      <div>
        <h4 className="text-center text-black/80 text-2xl font-bold">{name}</h4>
        <p className="text-center text-black/80 text-1xl font-semibold">{profile}</p>
        <ul className="flex justify-center gap-5 mt-4">
          <li className="bg-blue-600 rounded-full  p-[0.5rem]">
            <a href="#">
              <FaFacebookF className="text-white" />
            </a>
          </li>
          <li className="bg-[#1BA0F2] rounded-full  p-[0.5rem]">
            <a href="#">
              <FaTwitter className="text-white" />
            </a>
          </li>
          <li className="bg-[#DD2B69] rounded-full  p-[0.5rem]">
            <a href="#">
              <FaInstagram className="text-white" />
            </a>
          </li>
          <li className="bg-[#F90104] rounded-full  p-[0.5rem]">
            <a href="#">
              <FaYoutube className="text-white" />
            </a>
          </li>
        </ul>
        <div className="flex justify-center gap-8 my-8">
          <Button title="Subscribe" />
          <Button title="Message" />
        </div>
        <ul className="flex justify-center gap-5 pb-4">
          <li className="flex text-[1.2rem] text-black/80 items-center gap-1">
            <button className="cursor-pointer">
              <FaRegHeart />
            </button>
            <span className="font-semibold">60.4k</span>
          </li>
          <li className="flex text-[1.2rem]  text-black/80 items-center gap-1">
            <button className="cursor-pointer">
              <FaRegHeart />
            </button>
            <span className="font-semibold">60.4k</span>
          </li>
          <li className="flex text-[1.2rem] text-black/80 items-center gap-1">
            <button className="cursor-pointer">
              <FaRegHeart />
            </button>
            <span className="font-semibold">60.4k</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
