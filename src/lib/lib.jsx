

const generateAnchor = (catalogue) => {
  const anchorList = [];

  for(let key in catalogue) {
    const anchor = key.includes("_") ? <a className={key.replace("_", "")} href={catalogue[key]}></a> : <a className="link" href={catalogue[key]}>{key}</a>;
    
    anchorList.push(anchor);
  }

  return anchorList;
};

export {generateAnchor};