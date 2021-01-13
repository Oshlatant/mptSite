import NavBar from "../component/NavBar/NavBar.jsx";
import { generateAnchor } from "../lib/lib.jsx";
import "./App.css";

const App = function() {

  const linkCatalogue = {
    "_logo": "#",
    "MPatate": "#",
    "Boutique": "#",
    "Blog": "#",
    "Contact": "#",
  }

  const secondLinkCatalogue = {
    "Donation": "#",
    "_shop": "#",
  }
  
  return (
    <div id="app">
      <header>
        <NavBar slotList={generateAnchor(linkCatalogue)}/>
        <NavBar slotList={generateAnchor(secondLinkCatalogue)}/>
      </header>
      <main></main>
    </div>
  );
}

export default App;