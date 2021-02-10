import { useState } from 'react'
import "./Carousel.css"


const Carousel = () => {

  const [targetIMG, setTargetIMG] = useState(0);
  const [imageList, setImageList] = useState(["https://via.placeholder.com/320x180", "https://i.imgur.com/xq3Gvdh.jpg", "https://i.imgur.com/zn44Arr.jpeg", "https://i.imgur.com/d2KSrH1.jpg"]);
  
  // console.log(background);
  const style = {
    backgroundImage: `url(${imageList[targetIMG]})`
    // backgroundColor: "red",
  }

  const swapImage = function(indice) {
    const targetIndex = targetIMG + indice;

    setTargetIMG(targetIndex >= 0 && targetIndex < imageList.length ? targetIndex : targetIMG);
  }

  return (
    <div className="carousel">
      <div className="carousel-image" style={style}>
        <button onClick={()=>swapImage(-1)}>{"<"}</button>

        <button onClick={()=>swapImage(1)}>{">"}</button>
      </div>
    </div>
  )
}

export default Carousel
