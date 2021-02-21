import { useEffect, useState } from "react";
import Post from "../../component/Post/Post.jsx";
import ArticleDisplayer from "../../component/ArticleDisplayer/ArticleDisplayer.jsx";
import "./Index.css";

const Index = function() {

  const postDataList = [{
    content: `Lorem ipsum \n
dolor sit amet consectetur adipisicing elit. Iure ab ex dolore voluptatum qui, eius laborum deserunt **fugiat** porro voluptatem libero similique quam. Suscipit eum pariatur expedita, iste autem ducimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab ex dolore voluptatum 
qui, eius laborum deserunt **fugiat** porro voluptatem libero similique quam. Suscipit eum pariatur expedita, iste autem ducimus? Lorem ipsum dolor sit amet 
consectetur adipisicing elit. Iure ab ex dolore voluptatum qui, eius laborum deserunt **fugiat** porro voluptatem libero similique quam. Suscipit eum pariatur expedita, iste autem ducimus?`,
    
  }];




  useEffect(()=> {

    //fetch api
  }, []);


  return (
    <section className="index">
      
      <Post postData={postDataList[0]}/>
      
    </section>
  );
}

export default Index;