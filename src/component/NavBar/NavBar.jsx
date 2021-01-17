
import "./NavBar.css";

const NavBar = function({titleList, isSmallScreen, handleBurger}) {


  const largeNavBar = (
    <ul className="navbar">
      <li><a className={"navbar-logo"} href="#"></a></li>
      <li><a className={"navbar-link"} href="#">{titleList[0]}</a></li>
      <li><a className={"navbar-link"} href="#">{titleList[1]}</a></li>
      <li><a className={"navbar-link"} href="#">{titleList[2]}</a></li>
      <li><a className={"navbar-link"} href="#">{titleList[3]}</a></li>
      <li><a className={"navbar-link"} href="#">{titleList[4]}</a></li>
      <li><button className={"navbar-shop"} ></button></li>
    </ul>
  );
  const smallNavbar = (
    <ul className="small-navbar">
      <li><button className={"navbar-burger"} onClick={handleBurger}></button></li>
      <li><a className={"navbar-link"} href="#">{titleList[0]}</a></li>
      <li><button className={"navbar-shop"} ></button></li>
    </ul>
  )
  
  return (
    <header>
      {isSmallScreen ? smallNavbar : largeNavBar}
    </header>
  );
}

export default NavBar;
