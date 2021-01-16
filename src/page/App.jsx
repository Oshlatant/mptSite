import NavBar from "../component/NavBar/NavBar.jsx";
import "./App.css";

const App = function() {


  const catalogue = {
    fullCatalogue: {
      "logo": {"type": "image", "balise": "text", "link": null},
      "Meta Pomme de terre": {"type": "text", "balise": "text", "link": "#"},
      "Place des ventes": {"type": "text", "balise": "text", "link": "#"},
      "Blog": {"type": "text", "balise": "text", "link": "#"},
      "Contact": {"type": "text", "balise": "text", "link": "#"},
      "Donation": {"type": "text", "balise": "text", "link": "#"},
      "shop": {"type": "image", "balise": "button", "link": null},
    },
    smallCatalogue: {
      "burger": {"type": "image", "balise": "button", "link": null},
      "Meta Pomme de terre": {"type": "text", "balise": "text", "link": "#"},
      "shop": {"type": "image", "balise": "button", "link": null},
    }
  }
  
  return (
    <div id="app">
      <NavBar catalogue={catalogue}/>
    </div>
  );
}

export default App;