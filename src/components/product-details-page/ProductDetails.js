import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  const [productDetails, setProductsDetails] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/id")
      .then((r) => r.json())
      .then((response) => {
        setProductsDetails(response);
      });
  }, [setProductsDetails]);

  return <></>;
};

export default ProductDetails;
