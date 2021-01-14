import NavBar from "../component/NavBar/NavBar.jsx";
import "./App.css";

const App = function() {

  const catalogue = {
    "logo": {"type": "image", "balise": "text", "link": null},
    "burger": {"type": "image", "balise": "button", "link": null},
    "Meta Pomme de terre": {"type": "text", "balise": "text", "link": "#"},
    "Place des ventes": {"type": "text", "balise": "text", "link": "#"},
    "Blog": {"type": "text", "balise": "text", "link": "#"},
    "Contact": {"type": "text", "balise": "text", "link": "#"},
    "Donation": {"type": "text", "balise": "text", "link": "#"},
    "shop": {"type": "image", "balise": "button", "link": null},
  }
  
  return (
    <div id="app">
      <header>
        <NavBar catalogue={catalogue}/>
      </header>
      <main></main>
    </div>
  );
}

export default App;