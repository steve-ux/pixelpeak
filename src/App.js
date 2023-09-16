import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Blog from "./pages/Blog"; 
import Enviado from "./components/success";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<Nosotros />} />
        <Route path="/Contact" element={<Contacto />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/success" element={<Enviado />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
