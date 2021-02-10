import "./App.css";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import NavBar from "../component/NavBar/NavBar.jsx";
import BurgerMenu from "./BurgerMenu/BurgerMenu.jsx";
import Index from "./Index/Index.jsx";
import Blog from "./Blog/Blog.jsx";
import Shop from "./Shop/Shop.jsx";

const App = function() {

  const titleList = [
    "Meta Pomme de Terre",
    "Place des ventes",
    "Blog",
    "Contact",
    "Donation"
  ]

  const [lastPage, setLastPage] = useState("");
  const [isBurger, setBurger] = useState(false);
  const [isIndex, setIndex] = useState(true);
  const [isShop, setShop] = useState(false);
  const [isBlog, setBlog] = useState(false);
  const [isContact, setContact] = useState(false);
  const [isDonate, setDonate] = useState(false);
  
  const handleBurger = () => setBurger(!isBurger);

  const handlePage = function(page) {
    setLastPage(page);
    handleBurger();
    setIndex(page === "index");
    setShop(page === "shop");
    setBlog(page === "blog");
    setContact(page === "contact");
    setDonate(page === "donate");
  }


  return (
    <div id="app">
      <NavBar handleBurger={handleBurger} title="Meta Pomme de Terre" handlePage={handlePage}/>
      <main>
        {isIndex && <Index/>}
        {isShop && <Shop/>}
        {isBlog && <Blog/>}
        {isContact && <Shop/>}
        {isDonate && <Shop/>}
        {isBurger && <BurgerMenu className="burger-menu" handlePage={handlePage}/>}
      </main>

    </div>
  );
}

export default App;