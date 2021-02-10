
import "./NavBar.css";

const NavBar = ({handleBurger, title, handlePage}) => (
    <header>
      <ul className="navbar">
        <li><button className={"navbar-burger"} onClick={()=>handleBurger()}></button></li>
        <li><button className={"navbar-link"} onClick={()=>handlePage("index")}>{title}</button></li>
        <li><button className={"navbar-shop"} onClick={()=>handlePage("shop")} ></button></li>
      </ul>
    </header>
);

export default NavBar;
