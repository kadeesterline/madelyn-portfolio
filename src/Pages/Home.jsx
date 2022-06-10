import React from "react";
import hero from "../Images/IMG_8153.PNG";

function Home() {
  return (
    <div className="grid justify-center">
      <div className="flex justify-center">
        <h1 className="text-4xl pt-5 m-2">Madelyn Maske Photography</h1>
      </div>
      <img src={hero} alt="horseshoe bend" className="m-3" />
    </div>
  );
}

export default Home;
