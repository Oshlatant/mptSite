
import "./NavBar.css";

const NavBar = function({titleList, isSmallScreen, handlePage}) {


  const largeNavBar = (
    <ul className="navbar">
      <li><a className={"navbar-logo"} href="#"></a></li>
      <li><button className={"navbar-link"} onClick={()=>handlePage("index")}>{titleList[0]}</button></li>
      <li><button className={"navbar-link"} onClick={()=>handlePage("shop")}>{titleList[1]}</button></li>
      <li><button className={"navbar-link"} onClick={()=>handlePage("blog")}>{titleList[2]}</button></li>
      <li><button className={"navbar-link"} onClick={()=>handlePage("contact")}>{titleList[3]}</button></li>
      <li><button className={"navbar-link"} onClick={()=>handlePage("donate")}>{titleList[4]}</button></li>
      <li><button className={"navbar-shop"} ></button></li>
    </ul>
  );
  const smallNavbar = (
    <ul className="small-navbar">
      <li><button className={"navbar-burger"} onClick={()=>handlePage("burger")}></button></li>
      <li><button className={"navbar-link"} onClick={()=>handlePage("index")}>{titleList[0]}</button></li>
      <li><button className={"navbar-shop"} onClick={()=>handlePage("shop")} ></button></li>
    </ul>
  )
  
  return (
    <header>
      {isSmallScreen ? smallNavbar : largeNavBar}
    </header>
  );
}

export default NavBar;
