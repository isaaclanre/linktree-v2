import { Route, Routes } from "react-router-dom";
import { ContactMe } from "./components/ContactMe";
import { LandingPage } from "./components/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </>
  );
}

export default App;
