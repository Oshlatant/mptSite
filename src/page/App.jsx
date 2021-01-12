import NavBar from "../component/NavBar/NavBar.jsx";
import "./App.css";

const App = function() {

  const linkList = [
    "MPommedeterre",
    "Place des ventes...",
    "MPommedeterre",
    "MPommedeterre",
    "MPommedeterre"
  ];
    // "","Projets et actualités","Contacts intergalactiques","Blog"];
  
  return (
    <div id="app">
      <header>
        <NavBar slotList={linkList}/>
        <span>Shop panier ?</span>
      </header>
      <main></main>
    </div>
  );
}

export default App;