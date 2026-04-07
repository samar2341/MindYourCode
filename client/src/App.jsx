import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Visualize from "./pages/Visualize";
import Login from "./pages/Login";
import Pseudocode from "./pages/Pseudocode";
import Flowcharts from "./pages/Flowcharts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/visualize/:id" element={<Visualize />} />
        <Route path="/pseudocode" element={<Pseudocode />} />
        <Route path="/flowcharts" element={<Flowcharts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;