import React, { useState } from "react";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import "./Product.css";

const images = [
  { id: 1, category: "Image", src: img2 },
  { id: 2, category: "Lens", src: img3 },
  { id: 3, category: "Frame", src: img4 },
  { id: 4, category: "Specs", src: img5 },
];

const ImageGallery = () => {
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="image-container">
      <div className="glass-box">
        <h2>Image Gallery</h2>
        <button className="img-button" onClick={() => setFilter("All")}>
          All
        </button>
        <button className="img-button" onClick={() => setFilter("Image")}>
          Image
        </button>
        <button className="img-button" onClick={() => setFilter("Lens")}>
          Lens
        </button>
        <button className="img-button" onClick={() => setFilter("Specs")}>
          Specs
        </button>
        <button className="img-button" onClick={() => setFilter("Frame")}>
          Frames
        </button>

        <div className="gallery">
          {filteredImages.map((img) => (
            <img key={img.id} src={img.src} alt={img.category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
