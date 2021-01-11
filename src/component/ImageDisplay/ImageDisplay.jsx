import "./ImageDisplay.css";

const ImageDisplay = function({children}) {
  return (
    <main className="imagedisplay">
      {children}
    </main>
  );
}

export default ImageDisplay;