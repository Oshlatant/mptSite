import "./BurgerMenu.css";

const BurgerMenu = function({titleList, callbackList}) {

  return (
    <main>
      <ul>
        <li><button className="burger-link" onClick={callbackList[0]}>{titleList[0]}</button></li>
        <li><button className="burger-link" onClick={callbackList[1]}>{titleList[1]}</button></li>
        <li><button className="burger-link" onClick={callbackList[2]}>{titleList[2]}</button></li>
        <li><button className="burger-link" onClick={callbackList[3]}>{titleList[3]}</button></li>
        <li><button className="burger-link" onClick={callbackList[4]}>{titleList[4]}</button></li>
      </ul>
    </main>
  );
}

export default BurgerMenu;
