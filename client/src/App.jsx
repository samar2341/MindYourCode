import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Visualize from "./pages/Visualise";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/visualize/:id" element={<Visualize />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;