import NavBar from "../component/NavBar/NavBar.jsx";
import { generateAnchor } from "../lib/lib.jsx";
import "./App.css";

const App = function() {

  const linkCatalogue = {
    "_logo": "#",
    "Mr.Patate": "#",
    "Boutique": "#",
    "Blog": "#",
    "Contact": "#",
  }
  
  return (
    <div id="app">
      <header>
        <NavBar className="navbar" slotList={generateAnchor(linkCatalogue)}/>
        <span>Donation</span>
        <span>Shop panier ?</span>
      </header>
      <main></main>
    </div>
  );
}

export default App;