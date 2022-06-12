import React from "react";
import hero from "../Images/IMG_8153.PNG";
import { FaInstagram, FaHeart } from "react-icons/fa";

function Home() {
  return (
    <div className="grid justify-center">
      <div className="flex justify-center">
        <h1 className="text-4xl pt-5 m-2">Madelyn Maske Photography</h1>
      </div>
      <div className="flex justify-center m-2">
        <a
          href="https://www.instagram.com/maddiiepaiige/?hl=en"
          className="text-xl m-2 p-2"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="flex justify-center border-t-2 border-slate-400">
        <p className="w-96 p-2 m-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore
          voluptate, repudiandae alias impedit rem quas atque optio asperiores
          quaerat nam, aspernatur ex magni ullam debitis provident? Harum,
          aspernatur tenetur.
        </p>
      </div>
      {/* <img src={hero} alt="horseshoe bend" className="m-3" /> */}
      <div className="flex justify-center">
        <p className="w-100">
          <a href="https://kadecodes.dev">Made by Kade Esterline</a>
        </p>
      </div>
    </div>
  );
}

export default Home;
