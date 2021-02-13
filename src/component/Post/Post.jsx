import { innerHtml } from "../../lib/lib";
import "./Post.css";
import showdown from "showdown";

const Post = ({postData}) => {

  const converter = new showdown.Converter();

  const htmlContent = converter.makeHtml(postData.mdContent);

  return (
    <article className="post" dangerouslySetInnerHTML={innerHtml(htmlContent)}/>
  )
}

export default Post
