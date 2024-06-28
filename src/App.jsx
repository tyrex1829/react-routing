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

// code for prop-drilling & context api

// import { useContext, useState } from "react";
// import "./App.css";
// import { CountContext } from "./Context";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CountContext.Provider value={{ count, setCount }}>
//         <Count />
//       </CountContext.Provider>
//     </div>
//   );
// }

// function Count() {
//   return (
//     <div>
//       <CountRenderer />
//       <Buttons />
//     </div>
//   );
// }

// function CountRenderer() {
//   const { count } = useContext(CountContext);
//   return <div>{count}</div>;
// }

// function Buttons() {
//   const { count, setCount } = useContext(CountContext);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         increment
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         decrement
//       </button>
//     </div>
//   );
// }

// export default App;

// changes for wsl workspace

//
//
// code for recoil(changes in context code).

import { useContext } from "react";
import "./App.css";
import { CountContext } from "./Context";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>{count}</div>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default App;
