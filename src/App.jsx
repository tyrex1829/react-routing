import { useState } from "react";
import "./App.css";
import { Landing } from "./components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  const router = [
    {
      route: "/",
      component: Dashboard,
    },
  ];

  return (
    <div>
      <div>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Landing Page
        </button>
        <button
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
          Dashboard Page
        </button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
