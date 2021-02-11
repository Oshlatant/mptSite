import ArticleDisplayer from "../../component/ArticleDisplayer/ArticleDisplayer";
import Carousel from "../../component/Carousel/Carousel";
import "./Shop.css";

const Shop = function() {

  

  return (
    <section className="shop">
      <header>
        <Carousel/>
      </header>
      <section>
        <ArticleDisplayer/>
      </section>
    </section>
  );
}

export default Shop;
