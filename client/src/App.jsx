import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Visualize from "./pages/Visualize";
import Login from "./pages/Login";
import Docs from "./pages/Docs";
import CReference from "./pages/CReference";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/c" element={<CReference />} />
        <Route path="/login" element={<Login />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/visualize/:id" element={<Visualize />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;