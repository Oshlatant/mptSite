

const generateElement = (catalogue) => {
  const elementList = []

  for(let key in catalogue) {

    let element; 
    
    if(catalogue[key].balise === "button") {
      if(catalogue[key].type === "image") {
        element = <button className={`navbar-${key}`} onClick={console.log(`${key} a été cliqué`)}></button>;
      }
      else{
        element = <button className="navbar-link" onClick={`${key} a été cliqué`}>{key}</button>;
      }
    }
    else {
      if(catalogue[key].type === "image") {
        element = <a className={`navbar-${key}`} href={catalogue[key].link}></a>;
      }
      else {
        element = <a className="navbar-link" href={catalogue[key].link}>{key}</a>;
      }
    }

    elementList.push(<li key={key} >{element}</li>);
  }

  return elementList;
};




export { generateElement };


{/* <img src={`./assets/${key}.svg`} max-width="64px" alt={key}/> */}