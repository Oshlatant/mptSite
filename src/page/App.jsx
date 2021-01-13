import NavBar from "../component/NavBar/NavBar.jsx";
import { generateAnchor } from "../lib/lib.jsx";
import "./App.css";

const App = function() {

  const navBar1 = {
    "_logo": "#",
    "_burger": "#",
    "M Pomme de terre": "#",
  }

  const navBar2 = {
    "Place des ventes": "#",
    "Blog": "#",
    "Contact": "#",
  }

  const navBar3 = {
    "Donation": "#",
    "_shop": "#",
  }
  
  return (
    <div id="app">
      <header>
        <NavBar slotList={generateAnchor(navBar1)}/>
        <NavBar slotList={generateAnchor(navBar2)}/>
        <NavBar slotList={generateAnchor(navBar3)}/>
      </header>
      <main></main>
    </div>
  );
}

export default App;