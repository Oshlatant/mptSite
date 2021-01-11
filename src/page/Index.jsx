import ImageDisplay from "../component/ImageDisplay/ImageDisplay.jsx";
import NavBar from "../component/NavBar/NavBar.jsx";
import "./Index.css";

const Index = function() {
  return (
    <div id="app">
      <ImageDisplay>
        
      </ImageDisplay>
      <aside>
        <NavBar /> 
        <div>osef</div>
      </aside>
    </div>
  );
}

export default Index;