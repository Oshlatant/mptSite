
import PostCard from '../../component/PostCard/PostCard'
import "./Blog.css";

const Blog = () => {

  const postData = {
    title: "le titre",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iusto temporibus unde laudantium inventore culpa necessitatibus harum",
    miniature: "https://via.placeholder.com/300x600",
  }


  return (
    <section className="blog">
      <ul>
        <li><PostCard postData={postData}/></li>
        <li><PostCard postData={postData}/></li>
        <li><PostCard postData={postData}/></li>
        <li><PostCard postData={postData}/></li>
      </ul>
    </section>
  )
}

export default Blog;