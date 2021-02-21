import "./App.css";
import { useState } from "react";
import NavBar from "../component/NavBar/NavBar.jsx";
import Index from "./Index/Index.jsx";
import Blog from "./Blog/Blog.jsx";
import Shop from "./Shop/Shop.jsx";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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

  return (
    <Router>
      <div id="app">
        <main>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/contact">
              <Index />
            </Route>
            <Route exact path="/donate">
              <Index />
            </Route>
          </Switch>
        </main>
        <NavBar handleBurger={toggleBurger} title="Meta Pomme de Terre"/>
        

      </div>
    </Router>
  );
}

export default App;



// {/* <div id="app">
//         <main>
//           {isIndex && <Index/>}
//           {isShop && <Shop/>}
//           {isBlog && <Blog/>}
//           {isContact && <Shop/>}
//           {isDonate && <Shop/>}
//           {/* {burgerState && <BurgerMenu className="burger-menu" handlePage={handlePage}/>} */}
//         </main>
//         <NavBar handleBurger={toggleBurger} title="Meta Pomme de Terre" handlePage={handlePage}/>
        

//       </div> */}