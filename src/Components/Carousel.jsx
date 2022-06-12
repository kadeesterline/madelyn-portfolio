import React from "react";
import Flickity from "react-flickity-component";
import horseshoe from "../Images/IMG_8153.PNG";
import bay from "../Images/IMG_8181.PNG";
import foxglove from "../Images/IMG_8182.PNG";

function Carousel() {
  //   const flickityOptions = {
  //     initialIndex: 2,
  //     accessibility: true,
  //     adaptiveHeight: false,
  //     // autoPlay: 2000,
  //     autoPlay: false,
  //     cellAlign: "center",
  //     cellSelector: ".skill",
  //     wrapAround: true,
  //     // pageDots: true,
  //   };

  return (
    <Flickity>
      <img src={horseshoe} />
      <img src={bay} />
      <img src={foxglove} />
    </Flickity>
  );
}

export default Carousel;
