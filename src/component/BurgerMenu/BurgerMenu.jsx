import "./BurgerMenu.css";

const BurgerMenu = function({className, handlePage}) {
  
  const titleList = [
    // "Meta Pomme de Terre",
    "Place des ventes",
    "Blog",
    "Contact",
    "Donation"
  ];

  return (
    <nav className={className ? `burger-menu ${className}` : "burger-menu"}>
      <ul>
        <li><button onClick={()=>handlePage("shop")}>{titleList[0]}</button></li>
        <hr></hr>
        <li><button onClick={()=>handlePage("blog")}>{titleList[1]}</button></li>
        <hr></hr>
        <li><button onClick={()=>handlePage("contact")}>{titleList[2]}</button></li>
        <hr></hr>
        <li><button onClick={()=>handlePage("donate")}>{titleList[3]}</button></li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
