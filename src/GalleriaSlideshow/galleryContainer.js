import React, { useState, Fragment } from "react";
import { useEffect } from "react/cjs/react.development";
import Gallery from "./gallery";
import "./gallery.css";

const GalleryContainer = () => {
  const [user, setUser] = useState([]);

  const getData = async () => {
    const response = await fetch("data.json");
    const user = await response.json();
    setUser(user);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div className="majorContainer">
          {user.map((data) => (
            <Gallery user={data}/>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const gridContainer ={
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 0fr)',
    gridGap:'1PX'
}

export default GalleryContainer;
