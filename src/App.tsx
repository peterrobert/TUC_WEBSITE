import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing-page";
import WorkFlowPage from "./pages/work-flow-page";
// -- Router setup for LandingPage and WorkFlowPage --
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workflow" element={<WorkFlowPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
