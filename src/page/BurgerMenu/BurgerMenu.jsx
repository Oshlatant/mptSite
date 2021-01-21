import "./BurgerMenu.css";

const BurgerMenu = function({titleList, handlePage}) {

  console.log(titleList);

  return (
    <main>
      <ul className="burger-menu">
        <li><button className="burger-link" onClick={()=>handlePage("index")}>{titleList[0]}</button></li>
        <li><button className="burger-link" onClick={()=>handlePage("shop")}>{titleList[1]}</button></li>
        <li><button className="burger-link" onClick={()=>handlePage("index")}>{titleList[2]}</button></li>
        <li><button className="burger-link" onClick={()=>handlePage("index")}>{titleList[3]}</button></li>
        <li><button className="burger-link" onClick={()=>handlePage("index")}>{titleList[4]}</button></li>
      </ul>
    </main>
  );
}

export default BurgerMenu;
