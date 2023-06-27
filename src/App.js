import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/product-list/ProductList";
 import "./components/product-list/ProductList.css";
 import HomePage from "./components/home-page/HomePage";
 import "./components/home-page/HomePage.css"
import AboutUs from "./components/aboutus-page/AboutUsPage";

  
function App() {
  return  <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/productspage/" element={<ProductList />} />
      </Routes> 
    </>

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
