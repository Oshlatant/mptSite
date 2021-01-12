import React, { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = function({slotList}) {

  const [slotState, set] = useState([]);

  useEffect(()=>{
    const slot = slotList.map((element, index) => <li key={index}>{element}</li>);
    //everything is fine
    if(`${slotState}` === `${slot}`) {
      return;
    }
    set([...slotState, ...slot]);

  }, [slotState, slotList]);

  
  return (
    <ul className="navbar">
      {slotState}
    </ul>
  );
}

export default NavBar;
/* <li><a href="#">MPommedeterre</a></li>
<li><a href="#">Place des ventes...</a></li>
<li><a href="#">Projets et actualités</a></li>
<li><a href="#">Contacts intergalactiques</a></li>
<li><a href="#">Blog</a></li> */