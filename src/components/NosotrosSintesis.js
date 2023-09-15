import Colibri from "../assets/PixelPeak_logo_white_left.png";
import { Link } from "react-router-dom";

function NosotrosSintesis() {
    return (
    <div className="nosotros">
  <div className="description">
    <div>
    <p>PixelPeak es una agencia global dedicada a la <span>programación, diseño web </span> 
     y marketing digital. <br/>Te ofrecemos tu sitio online con <span>esencia creativa</span>.<br/>
     Calidad desde la unidad más pequeña.</p>
    <button><Link to="/AboutUs">Saber más</Link></button>
    </div>
    <div>
    <img class="fox" src={Colibri} alt="Logo PixelPeak" width="300"/>
    </div>
  </div>
  <div className="textClients">
    <h3>Que es una marca sin clientes</h3>
    <h4>[ Confían en nosotros ]</h4>
  </div>
    </div>
    );
  }
  
  export default NosotrosSintesis;