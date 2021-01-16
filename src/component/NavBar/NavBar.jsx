import { useMediaQuery } from 'react-responsive'
import { generateElement } from "../../lib/lib.jsx";
import "./NavBar.css";

const NavBar = function({catalogue}) {


  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1023px)'
  });
  // const isTinyScreen = useMediaQuery({
  //   query: '(max-width: 500px)'
  // });

  const fullElementList = generateElement(catalogue.fullCatalogue);
  const smallElementList = generateElement(catalogue.smallCatalogue);
  // const tinyElementList = generateElement(catalogue.tinyCatalogue);
  

  if(isSmallScreen) {
    return (
      <header className="small-navbar">
        <ul className="navbar-ul">
          {smallElementList}
        </ul>
      </header>
    );
  }
  // else if(isTinyScreen) {
  //   return (
  //     <ul className="tiny-navbar">
  //       {tinyElementList}
  //     </ul>
  //   );
  // }
  return (
    <header className="navbar">
      <ul className="navbar-ul">
        {fullElementList}
      </ul>
    </header>
  );
}

export default NavBar;
