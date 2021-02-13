import "./Article.css";

const Article = function({articleData}) {

  
  const backgroundImage = `url(${articleData.imgURL})`

  console.log(backgroundImage);
  // console.log(background);
  const style = {
    backgroundImage: backgroundImage,
    // backgroundColor: "red",
  }

  return (
      <article className="shop-article" style={style}>
        <div className="shop-article-name">NAME</div>
      </article>
  )
}

export default Article;