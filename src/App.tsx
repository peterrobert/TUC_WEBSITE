import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing-page";
import WorkFlowPage from "./pages/work-flow-page";
import AboutPage from "./pages/about-page/AboutPage";
import Top10LandingPage from "./pages/system-pages/Top10LandingPage";
import SuggestionBoxLandingPage from "./pages/system-pages/suggestion-box";
// -- Router setup for LandingPage and WorkFlowPage --
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workflow" element={<WorkFlowPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* --- Systems --- */}
        <Route path="/systems/top10" element={<Top10LandingPage />} />
        <Route
          path="/systems/suggestionBox"
          element={<SuggestionBoxLandingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
