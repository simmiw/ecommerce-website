import React from "react";
// import ProductList from "./Components/ProductList";
// import "./ComponentsCss/ProductList.css";
// import HomePage from "./Components/HomePage";
// import "./ComponentsCss/Home.css";
// import AboutUs from "./Components/AboutUs";
// import { Routes, Route } from "react-router-dom";

import MyPromiseAllPolyfill from './Components/PromiseAllPollyfill';
import "./ComponentsCss/PromiseAll.css";

function App() {
  return  <>
    <MyPromiseAllPolyfill/>
      {/* <div>This is my header</div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/productspage/:productType" element={<ProductList />} />
      </Routes> */}
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
