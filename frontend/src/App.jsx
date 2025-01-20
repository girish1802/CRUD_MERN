
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Add from "./Component/Add.jsx";
import Read from "./Component/Read.jsx";
import Update from "./Component/Update.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/alluser" element={<Read />} />
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  );
}
