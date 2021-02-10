
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./NavBar.css";

const NavBar = ({handleBurger, title, handlePage}) => (
  <nav className="navbar">
    <BurgerMenu handlePage={handlePage}/>
    <ul>
      <li><button className={"navbar-burger"} onClick={()=>handleBurger()}></button></li>
      <li><button className={"navbar-link"} onClick={()=>handlePage("index")}>{title}</button></li>
      <li><button className={"navbar-shop"} onClick={()=>handlePage("shop")} ></button></li>
    </ul>
  </nav>
);

export default NavBar;
