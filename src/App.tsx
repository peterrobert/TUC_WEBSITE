import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing-page";
import WorkFlowPage from "./pages/work-flow-page";
// -- Router setup for LandingPage and WorkFlowPage --
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workflow" element={<WorkFlowPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
