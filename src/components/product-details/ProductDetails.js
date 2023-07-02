import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductsDetails] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((r) => r.json())
      .then((response) => {
        setProductsDetails(response);
      });
  }, [setProductsDetails]);

  return <>{productDetails?.title}</>;
};

export default ProductDetails;
