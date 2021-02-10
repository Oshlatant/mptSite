import { useState } from 'react'
import "./Carousel.css"


const Carousel = () => {

  const [targetIMG, setTargetIMG] = useState(0);
  const [imageList, setImageList] = useState(["https://via.placeholder.com/320x290"]);
  
  // console.log(background);
  const style = {
    backgroundImage: `url(${imageList[targetIMG]})`
    // backgroundColor: "red",
  }

  return (
    <div className="carousel">
      <div className="carousel-image" style={style}>
        <button>{"<"}</button>

        <button>{">"}</button>
      </div>
    </div>
  )
}

export default Carousel
