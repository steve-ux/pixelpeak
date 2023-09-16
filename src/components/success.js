import Navbar from "../components/Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Enviado() {
    return (
      <>
      <Navbar/>
      <br/>
      <br/>
    <div className="enviado">
      <div>
        <h3 className="titleEnviado">
          <span className="resaltados">¡Tu mensaje fue enviado!</span> A la brevedad vas a ser contactado. Muchas gracias.
        </h3>
        <div className="contenedorBtn">
          <Link to="/">
            <button className="btnEnviado">Seguir navegando</button>
          </Link>
         </div>
        </div>
    </div>
    <Footer/>
    </>
    );
  }
  
  export default Enviado;