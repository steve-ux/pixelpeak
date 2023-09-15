import Colibri from "../assets/PixelPeak_logo_original.png";
import { Link } from "react-router-dom";

  function Navbar() {
    return (
    <div className="burgerNav">
      <h1 class="logo"><img class="fox" src={Colibri} alt="Logo mendowebx" width="40"/>[ PIXELPEAK ]</h1>
  <input id="toggle" type="checkbox"/>

<label for="toggle" class="hamburger">
  <div class="top-bun"></div>
  <div class="meat"></div>
  <div class="bottom-bun"></div>
</label>

<div class="nav">
  <div class="nav-wrapper">
    <nav>
    <Link to="/"><a href="#Inicio">INICIO</a></Link><br/>
      <a href="#Servicios">TRABAJOS</a><br/>
      <Link to="/AboutUs"><a href="#Nosotros">NOSOTROS</a></Link><br/>
      <a href="/Contact">CONTACTO</a><br/>
      {/* <a href="#Blog">BLOG</a> */}
    </nav>
  </div>
</div>
    </div>
    );
  }
  
  export default Navbar;