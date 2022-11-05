import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { DashBoard } from "./components/DashBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
