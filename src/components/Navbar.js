import Colibri from "../assets/PixelPeak_logo_original.png";

  function Navbar() {
    return (
    <div className="burgerNav">
      <h1 class="logo"><img class="fox" src={Colibri} alt="Logo PixelPeak" width="40"/>[ eKoddex ]</h1>
  <input id="toggle" type="checkbox"/>

<label for="toggle" class="hamburger">
  <div class="top-bun"></div>
  <div class="meat"></div>
  <div class="bottom-bun"></div>
</label>

<div class="nav">
  <div class="nav-wrapper">
    <nav>
    <a href="/">INICIO</a><br/>
      <a href="#Servicios">TRABAJOS</a><br/>
      <a href="/AboutUs">NOSOTROS</a><br/>
      <a href="/Contact">CONTACTO</a><br/>
      {/* <a href="/Blog">BLOG</a> */}
    </nav>
  </div>
</div>
    </div>
    );
  }
  
  export default Navbar;