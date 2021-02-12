import { innerHtml } from "../../lib/lib";
import "./Post.css";
import showdown from "showdown";

const Post = ({postData}) => {

  // const postLayout = [];



  // const formatBold = (element) => {
  //   const boldWord = element.match(/\*\*.+\*\*/);

  //   if(!boldWord) {
  //     return element;
  //   }

  //   const boldWordArray = boldWord[0].split("").filter((char)=> char !== "*");
  //   boldWordArray.unshift("<span class='post-word-bold'>");
  //   boldWordArray.push("</span>");
      
  //   const boldWordFormat = boldWordArray.join("");

  //   return boldWordFormat;


  //   // const boldText = boldWord[0].replaceAll("*", "")
  //   // return <strong>{boldText}</strong>
  // }

  // const buildPost = (content) => {

    
  //   // const boldContent = [];


  //   const finalContent = content.split(" ").map((element)=>formatBold(element)).join(" ");


  //   return finalContent;
  // }

  // const postContent = buildPost(content);

  const converter = new showdown.Converter();

  const htmlContent = converter.makeHtml(postData.mdContent);




  return (
    <article className="post" dangerouslySetInnerHTML={innerHtml(htmlContent)}/>
  )
}

export default Post
