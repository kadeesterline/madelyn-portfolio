import React from "react";
import horseshoe from "../Images/IMG_8153.PNG";
import bay from "../Images/IMG_8181.PNG";
import foxglove from "../Images/IMG_8182.PNG";
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
      <div className="flex justify-center">
        <div className="flex justify-center w-96 border-t-2 border-slate-400">
          <p className="p-2 m-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            inventore voluptate, repudiandae alias impedit rem quas atque optio
            asperiores quaerat nam, aspernatur ex magni ullam debitis provident?
            Harum, aspernatur tenetur.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <img src={horseshoe} alt="horseshoe bend" className="m-3 w-96" />
        <img src={bay} alt="bay" className="m-3 w-96" />
        <img src={foxglove} alt="foxglove" className="m-3 w-96" />
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center w-96 border-t-2 border-slate-400">
          <p className="w-100 m-2 p-2">
            <a href="https://kadecodes.dev">Made by Kade Esterline</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
