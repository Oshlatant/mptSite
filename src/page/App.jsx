import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import NavBar from "../component/NavBar/NavBar.jsx";
import "./App.css";

const App = function() {

  const titleList = [
    "Meta Pomme de Terre",
    "Place des ventes",
    "Blog",
    "Contact",
    "Donation"
  ]

  const [isBurgerClick, setBurgerState] = useState(false);
  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1023px)'
  });

  const handleBurger = function(e) {
    setBurgerState(!isBurgerClick);
  }

  console.log(isBurgerClick);


  return (
    <div id="app">
      <NavBar titleList={titleList} isSmallScreen={isSmallScreen} handleBurger={handleBurger}/>
    </div>
  );
}

export default App;