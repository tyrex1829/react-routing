// import React, { Suspense, useState } from "react";
// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import "./App.css";
// const Landing = React.lazy(() => import("./components/Landing"));
// const Dashboard = React.lazy(() => import("./components/Dashboard"));

// function App() {
//   const [count, setCount] = useState(0);

// router array, generally we map over this array for over routes.
// const router = [
//   {
//     route: "/",
//     component: Dashboard,
//   },
// ];

// for routing
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           <Route
//             path="/dashboard"
//             element={
//               <Suspense fallback={"loading..."}>
//                 <Dashboard />
//               </Suspense>
//             }
//           />
//           <Route
//             path="/"
//             element={
//               <Suspense fallback={"loading..."}>
//                 <Landing />
//               </Suspense>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// this code is for routing Appbar
// function Appbar() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <button
//         onClick={() => {
//           navigate("/");
//         }}
//       >
//         Landing Page
//       </button>
//       <button
//         onClick={() => {
//           navigate("/dashboard");
//         }}
//       >
//         Dashboard Page
//       </button>
//     </div>
//   );
// }

// code for prop-drilling.

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count />
      <Buttons />
    </div>
  );
}

function Count() {}

function Buttons() {}

export default App;
