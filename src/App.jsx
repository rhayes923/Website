import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Link } from "@mui/material";
import Home from "./Home.jsx";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
