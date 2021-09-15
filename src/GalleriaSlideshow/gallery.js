import React from 'react'
import Image from '../advanced/dailyDev/image/bright.JPG'

const Gallery = () => {
    return (
      <React.Fragment>
        <div className="">
            <img src={Image} alt="" className="containerCard" />
            <div className="containerCardTitle">
            <h3>Title</h3>
            <p>Name of author</p>
          </div>
        </div>
      </React.Fragment>
    );
}

export default Gallery