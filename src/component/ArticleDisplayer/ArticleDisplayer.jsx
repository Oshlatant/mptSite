import { useState } from 'react'
import Article from '../Article/Article';
import "./ArticleDisplayer.css";

const ArticleDisplayer = ({ip}) => {
  const [articleList, setArticleList] = useState(new Array(50).fill({imgURL:"https://via.placeholder.com/140"}));

  

  return (
    <ul className="article-displayer">
      {articleList.map((articleData, i)=>{

        

        return <li key={i}><Article articleData={articleData}/></li>

      })}
    </ul>
  )
}

export default ArticleDisplayer;
