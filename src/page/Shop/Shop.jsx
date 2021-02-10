import Article from "../../component/Article/Article";
import "./Shop.css";

const Shop = function() {

  const testArray = new Array(50).fill(null);

  return (
    <section>
      <header>
        CAROUSSEL
      </header>
      <ul className="shop-article-list">
        {testArray.map((e, i)=>(
          <li key={i}><Article/></li>
        ))}
      </ul>
    </section>
  );
}

export default Shop;
