import React, { useState } from "react";
import "./homescreen.css";

import Ib from './image/ib.JPG'
import Bright from "./image/bright.JPG";
import Sam from "./image/sam.JPG";
import Vero from "./image/vero.JPG";
import Taheebat from "./image/taheebat.JPG";

const Homescreen = () => {
    const [data, setData] = useState([
      {
        id: 1,
        name: "Ibukun",
        quote: "God is  Great",
        image: Ib,
        time: Date.now().toLocaleString(),
      },
      {
        id: 2,
        name: "Taibat",
        quote: "I love diamonds",
        image: Taheebat,
        time: Date.now().toLocaleString(),
      },
      {
        id: 3,
        name: "Bright",
        quote: "EWWWWWWWWWEEEEEEEEE!",
        image: Bright,
        time: Date.now().toLocaleString(),
      },
      {
        id: 4,
        name: "Veronica",
        quote: "God is gracious",
        image: Vero,
        time: Date.now().toLocaleString(),
      },
      {
        id: 5,
        name: "Sam",
        quote: "Failure is not final",
        image: Sam,
        time: Date.now().toLocaleString(),
      },
    ]);

  return (
    <div className="container">
      <div className="containerWrapper">
        {data.map((user) => (
          <div className="containerCard">
            <div className="containerCardRow">
              <div className="containerCardRowCancel">x</div>
              <img className="containerCardRowImage" src={user.image} />
            </div>
            <div className="containerCardQuote">
              {user.quote}
            </div>
            <div className="containerCardName">{user.name}</div>
            <div className="containerCardTime">{user.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Homescreen;
