import React from "react";
import { useState } from "react/cjs/react.development";
import Bright from "../advanced/dailyDev/image/bright.JPG";
import Ib from "../advanced/dailyDev/image/ib.JPG";
import Sam from "../advanced/dailyDev/image/sam.JPG";
import Taheebat from "../advanced/dailyDev/image/taheebat.JPG";
import Vero from "../advanced/dailyDev/image/vero.JPG";
import "./practiceGallery.css";

const Galleria = () => {
  let data = [
    {
      id: 1,
      image: Bright,
    },
    {
      id: 2,
      image: Ib,
    },
    {
      id: 3,
      image: Sam,
    },
    {
      id: 4,
      image: Taheebat,
    },
    {
      id: 5,
      image: Vero,
    },
  ];
  const [model, setModel] = useState(false);
  const [image, setImage] = useState("");

  const handleGetImage = (img) => {
    setImage(img);
    setModel(true);
  };
  return (
    <React.Fragment>
      <div>
        <div>
          <h1>My Gallery</h1>
        </div>
        <div className={model ? "model open" : "model"}>
          <img src={image} alt="" />
          <div className="closeBtn" onClick={() => setModel(false)}>
            <h1>X</h1>
          </div>
        </div>
        <div className="galleryContainer container">
          {data.map((data) => {
            return (
              <div key={data.id} className="img" onClick={() => handleGetImage(data.image)}>
                <img src={data.image} alt="" style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Galleria;
