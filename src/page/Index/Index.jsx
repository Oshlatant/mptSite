import { useEffect, useState } from "react";
import { innerHtml } from "../../lib/lib";
import "./Index.css";

const Index = function() {

  const [content, setContent] = useState("");

  useEffect(()=> {

    //fetch api

    setContent(
    `Lorem ipsum dolor <strong>lol</strong>sit amet consectetur adipisicing elit.
    Iure ab ex dolore voluptatum qui, eius laborum deserunt fugiat porro voluptatem libero similique quam.
    Suscipit eum pariatur expedita, iste autem ducimus?`
    )
  }, []);

  

  return (
    <article className="index">
      
      <div dangerouslySetInnerHTML={innerHtml(content)}></div>
      
    </article>
  );
}

export default Index;