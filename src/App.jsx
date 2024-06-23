import { useState } from "react";
import "./App.css";
import { Landing } from "./components/Landing";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  // router array, generally we map over this array for over routes.
  // const router = [
  //   {
  //     route: "/",
  //     component: Dashboard,
  //   },
  // ];

  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard Page
      </button>
    </div>
  );
}

export default App;
