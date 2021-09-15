import React, { useState } from "react";
import Bright from "../advanced/dailyDev/image/bright.JPG";
import Ib from "../advanced/dailyDev/image/ib.JPG";
import Sam from "../advanced/dailyDev/image/sam.JPG";
import Taheebat from "../advanced/dailyDev/image/taheebat.JPG";
import Vero from "../advanced/dailyDev/image/vero.JPG";
// import "./gallery.css";

const Gallery = () => {
  let data = [
    {
      id: 1,
      img: Bright,
    },
    {
      id: 2,
      img: Ib,
    },

    {
      id: 3,
      img: Sam,
    },

    {
      id: 4,
      img: Taheebat,
    },
    {
      id: 5,
      img: Vero,
    },
  ];
  const [model, setModel] = useState(false);
  const [myImage, setMyImage] = useState("");
  const getImage = (imrSrc) => {
    setMyImage(imrSrc);
    setModel(true);
  };
  return (
    <div>
      <div>Image Gallery</div>
      <div className={model ? "model open" : "model"}>
        <img src={myImage} alt="" />
        <h1 className="closeBtn" onClick={()=> setModel(false)}>X</h1>
      </div>
      <div className="gallery container">
        {data.map((item, index) => {
          return (
            <div key={index} className="imgPic" onClick={() => getImage(item.img)}>
              <img src={item.img} alt="" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
