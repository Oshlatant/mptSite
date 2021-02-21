import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./NavBar.css";

const NavBar = ({title}) => {
  
  const toggleBurger = () => {
    const burgerMenu = document.querySelector(".burger-menu");
    
    burgerMenu.classList.toggle("show");
  };

  const maskBurger = () => {
    const burgerMenu = document.querySelector(".burger-menu");
    burgerMenu.classList.remove("show");
  }


  return (
    <nav className="navbar">
      <BurgerMenu onClick={maskBurger}/>
      <ul>
        <li><button className={"navbar-burger"} onClick={toggleBurger}></button></li>
        <li><Link className={"navbar-link"} onClick={maskBurger} to="/">{title}</Link></li>
        <li><button className={"navbar-shop"} ></button></li>
      </ul>
    </nav>
  );
  
};

export default NavBar;
