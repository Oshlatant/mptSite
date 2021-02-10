import "./App.css";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import NavBar from "../component/NavBar/NavBar.jsx";
import BurgerMenu from "../component/BurgerMenu/BurgerMenu.jsx";
import Index from "./Index/Index.jsx";
import Blog from "./Blog/Blog.jsx";
import Shop from "./Shop/Shop.jsx";

const App = function() {

  const [lastPage, setLastPage] = useState("");
  // const [burgerState, setBurger] = useState(false);
  const [isIndex, setIndex] = useState(true);
  const [isShop, setShop] = useState(false);
  const [isBlog, setBlog] = useState(false);
  const [isContact, setContact] = useState(false);
  const [isDonate, setDonate] = useState(false);
  
  const toggleBurger = () => {
    const burgerMenu = document.querySelector(".burger-menu");
    
    burgerMenu.classList.toggle("show");
  };

  const maskBurger = () => {
    const burgerMenu = document.querySelector(".burger-menu");
    burgerMenu.classList.remove("show");
  }

  const handlePage = function(page) {
    maskBurger();
    setLastPage(page);
    setIndex(page === "index");
    setShop(page === "shop");
    setBlog(page === "blog");
    setContact(page === "contact");
    setDonate(page === "donate");
  }


  return (
    <div id="app">
      <main>
        {isIndex && <Index/>}
        {isShop && <Shop/>}
        {isBlog && <Blog/>}
        {isContact && <Shop/>}
        {isDonate && <Shop/>}
        {/* {burgerState && <BurgerMenu className="burger-menu" handlePage={handlePage}/>} */}
      </main>
      <NavBar handleBurger={toggleBurger} title="Meta Pomme de Terre" handlePage={handlePage}/>
      

    </div>
  );
}

export default App;