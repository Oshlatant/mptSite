import "./Article.css";
// import background from '../../assets/wailord.jpg';

const Article = function({id}) {

  //useEffect apifetch
  const backgroundImage = `https://via.placeholder.com/250`;
  // console.log(background);
  const style = {
    backgroundImage: `url(${backgroundImage})`
    // backgroundColor: "red",
  }

  return (
      <article className="article" style={style}>
        <div className="article-info">TEXT</div>
      </article>
  )
}

export default Article;