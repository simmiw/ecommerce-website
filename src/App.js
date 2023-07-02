import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/product-list/ProductList";
import "./components/product-list/ProductList.css";
import AboutUs from "./components/aboutus-page/AboutUsPage";
import "./App.css";
import ProductDetails from "./components/product-details-page/ProductDetails";

function App() {
  return (
    <>
      <div className="webpage">
        <Link to="/">
          <div className="product-list">Products</div>
        </Link>
        <Link to="/aboutus">
          <div className="about-us-page">About Us</div>
        </Link>
      </div>
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;

// import './App.css';
// import Dashboard from './Dashboard';

// function testFn() {
//   return <div>test fn jsx</div>
// }

// // JSX => JavaScript XML
// function App() {
//   const printMyName = () => {
//     console.log("SIMMI")
//   }
//   const a = [1, 2, 3, 4];
//   return (
//     <div>
//       TEST HONDA
//       <div onClick={printMyName}>test</div>
//       <ul>
//         {a.map(function (item, index) {
//           return <li key={item}>{item}</li>
//         })}
//       </ul>
//       {testFn()}
//       <Dashboard count={1} />
//       <Dashboard />
//       <Dashboard count={3} name={"Simmi"} age={54} />
//       <Dashboard />
//       <Dashboard />
//     </div>
//   );
// }

// export default App;
