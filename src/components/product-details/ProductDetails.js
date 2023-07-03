import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import ProductImages from "./product-images/ProductImages";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductsDetails] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((r) => r.json())
      .then((response) => {
        setProductsDetails(response);
      });
  }, [setProductsDetails, id]);

  return productDetails ? (
    <>
      <div className="all-items">
        <ProductImages productDetails={productDetails} />
        <div className="product-info">
          <h3>{productDetails.title}</h3>
          <div>
            <span className="detail-label">Brand:</span> {productDetails.brand}
          </div>
          <div>
            <span className="detail-label">Price:</span> ${productDetails.price}
          </div>
          <div>
            <span className="detail-label">Rating:</span>{" "}
            {productDetails.rating}
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default ProductDetails;
