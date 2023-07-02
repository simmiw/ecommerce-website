import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState("All");
  const [sortedByPrice, setSortedByPrice] = useState("");
  const [sortedByRating, setSortedByRating] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((r) => r.json())
      .then((response) => {
        setProducts(response.products);
      });
  }, [setProducts]);

  useEffect(() => {
    switch (sortedByPrice) {
      case "ascending":
        {
          const sortedProducts = [...products];
          sortedProducts.sort((a, b) => {
            return a.price - b.price;
          });
          setProducts(sortedProducts);
        }
        break;
      case "descending":
        {
          const sortedProducts = [...products];
          sortedProducts.sort((a, b) => {
            return b.price - a.price;
          });
          setProducts(sortedProducts);
        }
        break;
      default:
        break;
    }
  }, [sortedByPrice, products]);

  useEffect(() => {
    switch (sortedByRating) {
      case "morethan4":
        {
          const sortedProducts = [...products];
          sortedProducts.sort((a, b) => {
            return a.rating - b.rating;
          });
          setSortedByRating(sortedProducts);
        }
        break;
      case "lessthan4":
        {
          const sortedProducts = [...products];
          sortedProducts.sort((a, b) => {
            return b.rating - a.rating;
          });
          setSortedByRating(sortedProducts);
        }
        break;
      default:
        break;
    }
  }, [sortedByRating, products]);

  const filterSelectedItems = (event) => {
    setSelectedItems(event.target.value);
  };

  const filterByPrice = (event) => {
    setSortedByPrice(event.target.value);
  };
  const filterByRating = (event) => {
    setSortedByRating(event.target.value);
  };
  return (
    <>
      <div className="filters">
        <select
          className="list"
          value={selectedItems}
          onChange={filterSelectedItems}
        >
          <option value="All">All Products</option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
          <option value="OPPO">Oppo</option>
        </select>
        <select
          className="price-sorting"
          value={sortedByPrice}
          onChange={filterByPrice}
        >
          <option value="" disabled>
            Sort by Price
          </option>
          <option value="ascending">Min-Max</option>
          <option value="descending">Max-Min</option>
        </select>
        <select
          className="rating-sorting"
          value={sortedByRating}
          onChange={filterByRating}
        >
          <option value="" disabled>
            {" "}
            Sort By Rating
          </option>
          <option value="morethan4"> More Than 4</option>
          <option value="lessthan4">Less Than 4</option>
        </select>
      </div>
      <div className="list-items">
        {products.map(function (item) {
          if (
            selectedItems === "All" ||
            selectedItems.toLowerCase() === item.brand.toLowerCase()
          ) {
            return (
              <Link
                to={`/product/${item.id}`}
                className="product-item"
                key={item.id}
              >
                <img className="img" src={item.thumbnail} alt={item.title} />
                <div>Product: {item.title}</div>
                <div>Brand: {item.brand}</div>
                <div>Price: ${item.price}</div>
                <div>Rating: {item.rating}</div>
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};

export default ProductList;
