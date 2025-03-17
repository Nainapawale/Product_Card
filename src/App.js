import Product from "././Components/Product";
import Countdown from "././Components/Countdown";
import ImageGallery from "././Components/ImageGallery";

const App = () => {
  const headingStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
  };

  return (
    <div>
      <h1 style={headingStyle}>Product Card</h1>

      <Product />
      <Countdown />

      <ImageGallery />
    </div>
  );
};

export default App;
