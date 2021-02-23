import { useEffect } from "react";
import "./PostCard.css";



const PostCard = ({postData}) => {

  console.log(postData);
  const backgroundImage = `url(${postData.miniature})`

  const style = {
    backgroundImage: backgroundImage,
  }

 


  return (
    <div className="postcard" style={style}>
      <div className="postcard-data">
        <div className="postcard-title">{postData.title}</div>
        <span className="postcard-date">{postData.date}</span>
      </div>
    </div>
  )
}

export default PostCard
