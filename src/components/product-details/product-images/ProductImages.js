import React, { useEffect, useState } from "react";
import "./ProductImages.scss";

const ProductImages = ({ productDetails }) => {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setSelectedImage(productDetails.images[0]);
  }, [setSelectedImage, productDetails.images]);

  const updateImage = (event) => {
    setSelectedImage(event.target.currentSrc);
    console.log(event.target.currentSrc);
  };
  return (
    <div className="product-images">
      <div>
        {productDetails.images.map((img) => {
          return (
            <div
              className={
                "thumbnail" + (selectedImage === img ? " selected" : "")
              }
              key={img}
            >
              <img src={img} alt="product" onMouseOver={updateImage} />
            </div>
          );
        })}
      </div>

      <div className="selected-image">
        <img src={selectedImage} alt={productDetails.title} />
      </div>
    </div>
  );
};

export default ProductImages;
