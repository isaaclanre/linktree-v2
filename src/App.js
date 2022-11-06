import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { LandingPage } from "./components/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
