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

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1023px)'
  });

  const [lastPage, setLastPage] = useState("");
  const [isBurgerMenu, setBurger] = useState(false);
  const [isIndex, setIndex] = useState(true);
  const [isShop, setShop] = useState(false);
  const [isBlog, setBlog] = useState(false);
  const [isContact, setContact] = useState(false);
  const [isDonate, setDonate] = useState(false);

  const handlePage = function(page) {
    setLastPage(page);
    setBurger(page === "burger");
    setIndex(page === "index");
    setShop(page === "shop");
    setBlog(page === "blog");
    setContact(page === "contact");
    setDonate(page === "donate");
  }

  return (
    <div id="app">
      <NavBar titleList={titleList} isSmallScreen={isSmallScreen} handlePage={handlePage}/>
      {isBurgerMenu && <BurgerMenu titleList={titleList} handlePage={handlePage}/>}
      {isIndex && <Index/>}
      {isShop && <Shop/>}
      {isBlog && <Blog/>}
    </div>
  );
}

export default App;