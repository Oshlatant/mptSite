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
        <NavBar title="Meta Pomme de Terre"/>
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