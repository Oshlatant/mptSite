import "./BurgerMenu.css";

const BurgerMenu = function({handlePage}) {

  
  const titleList = [
    "Meta Pomme de Terre",
    "Place des ventes",
    "Blog",
    "Contact",
    "Donation"
  ];

  return (
    <aside>
      <ul className="burger-menu">
        <li><button className="burger-link" onClick={()=>handlePage("index")}>{titleList[0]}</button></li>
        <li><button className="burger-link" onClick={()=>handlePage("shop")}>{titleList[1]}</button></li>
        <li><button className="burger-link" onClick={()=>handlePage("index")}>{titleList[2]}</button></li>
        <li><button className="burger-link" onClick={()=>handlePage("index")}>{titleList[3]}</button></li>
        <li><button className="burger-link" onClick={()=>handlePage("index")}>{titleList[4]}</button></li>
      </ul>
    </aside>
  );
}

export default BurgerMenu;
