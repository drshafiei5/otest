import "./styles.css";
import AddHome from "./Components/AddHome";
import AllHome from "./Components/AllHome";
import TheHome from "./Components/TheHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllHome />} />
        <Route path="/add" element={<AddHome />} />
        <Route path="/home/:id" element={<TheHome />} />
      </Routes>
    </Router>
  );
}
