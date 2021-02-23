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
      <ul>
        <hr></hr>
        <li><Link to="/shop">{titleList[0]}</Link></li>
        <hr></hr>
        <li><Link to="/blog">{titleList[1]}</Link></li>
        <hr></hr>
        <li><Link to="/contact">{titleList[2]}</Link></li>
        <hr></hr>
        <li><Link to="/donate">{titleList[3]}</Link></li>
      </ul>
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
