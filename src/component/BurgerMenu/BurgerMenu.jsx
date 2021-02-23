import "./BurgerMenu.css";
import { Link } from "react-router-dom";


const BurgerMenu = function({className, onClick}) {
  
  const titleList = [
    // "Meta Pomme de Terre",
    "Place des ventes",
    "Blog",
    "Contact",
    "Donation"
  ];

  return (
    <nav className={className ? `burger-menu ${className}` : "burger-menu"} onClick={onClick}>
        <hr></hr>
        <Link to="/shop">
          <span className="gg-shopping-cart"></span><span><span>{titleList[0]}</span></span>
        </Link>
        <hr></hr>
        <Link to="/blog">
          <span className="gg-copy"></span><span><span>{titleList[1]}</span></span>
        </Link>
        <hr></hr>
        <Link to="/contact">
          <span className="gg-cloud"></span><span><span>{titleList[2]}</span></span>
        </Link>
        <hr></hr>
        <Link to="/donate">
          <span className="gg-cloud"></span><span><span>{titleList[3]}</span></span>
        </Link>
        
    </nav>
  );
}

export default BurgerMenu;


// <nav className={className ? `burger-menu ${className}` : "burger-menu"}>
//       <ul>
//         <li><button onClick={()=>handlePage("shop")}>{titleList[0]}</button></li>
//         <hr></hr>
//         <li><button onClick={()=>handlePage("blog")}>{titleList[1]}</button></li>
//         <hr></hr>
//         <li><button onClick={()=>handlePage("contact")}>{titleList[2]}</button></li>
//         <hr></hr>
//         <li><button onClick={()=>handlePage("donate")}>{titleList[3]}</button></li>
//       </ul>
//     </nav>
