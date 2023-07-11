import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.scss";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortedByPrice, setSortedByPrice] = useState("");
  const [filteredByRating, setfilteredByRating] = useState("");
  const [searchInputtext, setSearchlnputText] = useState("");
  const [displayItems, setDisplayItems] = useState(null);

  const onInputChange = (event) => {
    setSearchlnputText(event.target.value);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((r) => r.json())
      .then((response) => {
        setProducts(response.products);
      });
  }, [setProducts]);

  useEffect(() => {
    if (!products) {
      return;
    }
    let filteredProducts;

    if (!selectedBrand || selectedBrand === "All") {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter((item) => {
        return item.brand.toLowerCase() === selectedBrand.toLowerCase();
      });
    }

    if (filteredByRating === "morethan4") {
      filteredProducts = filteredProducts.filter((item) => {
        return item.rating >= 4.5;
      });
    }
    if (filteredByRating === "lessthan4") {
      filteredProducts = filteredProducts.filter((item) => {
        return item.rating < 4.5;
      });
    }
    if (searchInputtext !== "") {
      const searchText = searchInputtext.toLowerCase();
      filteredProducts = filteredProducts.filter((item) => {
        return item.title.toLowerCase().includes(searchText);
      });
    }

    setDisplayItems(filteredProducts);
  }, [selectedBrand, products, searchInputtext, filteredByRating]);

  useEffect(() => {
    switch (sortedByPrice) {
      case "ascending":
        {
          const sortedProducts = [...displayItems];
          sortedProducts.sort((a, b) => {
            return a.price - b.price;
          });
          setDisplayItems(sortedProducts);
        }
        break;
      case "descending":
        {
          const sortedProducts = [...displayItems];
          sortedProducts.sort((a, b) => {
            return b.price - a.price;
          });
          setDisplayItems(sortedProducts);
        }
        break;
      default:
        break;
    }
  }, [sortedByPrice, displayItems]);

  const filterSelectedItems = (event) => {
    setSelectedBrand(event.target.value);
  };

  const filterByPrice = (event) => {
    setSortedByPrice(event.target.value);
  };
  const filterByRating = (event) => {
    setfilteredByRating(event.target.value);
  };
  return (
    <>
      <div className="all-filters">
        <input
          type="text"
          value={searchInputtext}
          placeholder="Search product"
          onChange={onInputChange}
        />
        <span className="filters">
          <select value={selectedBrand} onChange={filterSelectedItems}>
            <option value="All">All Products</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="OPPO">Oppo</option>
          </select>
          <select value={sortedByPrice} onChange={filterByPrice}>
            <option value="" disabled>
              Sort by Price
            </option>
            <option value="ascending">Min-Max</option>
            <option value="descending">Max-Min</option>
          </select>
          <select value={filteredByRating} onChange={filterByRating}>
            <option value="" disabled>
              Sort By Rating
            </option>
            <option value="morethan4"> More Than 4</option>
            <option value="lessthan4">Less Than 4</option>
          </select>
        </span>
      </div>
      <div className="list-items">
        {displayItems
          ? displayItems.map(function (item) {
              return (
                <Link
                  to={`/product/${item.id}`}
                  className="product-item"
                  key={item.id}
                >
                  <img src={item.thumbnail} alt={item.title} />
                  <div>Product: {item.title}</div>
                  <div>Brand: {item.brand}</div>
                  <div>Price: ${item.price}</div>
                  <div>Rating: {item.rating}</div>
                </Link>
              );
            })
          : null}
      </div>
    </>
  );
};

export default ProductList;
