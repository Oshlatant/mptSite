import "./PostCard.css";

const PostCard = ({postData}) => {
  const style = {
    backgroundImage: postData.miniature,
  }

  return (
    <div className="postcard" style={style}>
      <div>
        <div className="postcard-title">{postData.title}</div>
        <span className="postcard-date">XX/XX/XXXX</span>
      </div>
    </div>
  )
}

export default PostCard
