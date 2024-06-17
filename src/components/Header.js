import Boton from "../components/Boton";
import Navbar from "../components/Navbar";
import Videoloop from "../assets/tv-pixel-original.mov";

function Header() {
  return (
    <div className="headerPadre">
       <video className="video" autoPlay loop muted>
      <source src={Videoloop} type="video/mp4" />
      </video>
<Navbar/>
  <div className="header">
{/* <h1>
  <span style={{"--start-color":"#FFFFF", "--end-color":"#FFFFF", "--content": "'Diseñar.'", "--delay":"0s"}}>
    Diseñar.
  </span>
  <span style={{"--start-color":"#FFFFF","animation-name":"a2", "--end-color":"#FFFFF", "--content": "'Programar.'", "--delay":"1.5s"}}>
    Programar.
  </span>
  <span style={{"--start-color":"#FFFFF", "animation-name":"a3", "--end-color":"#FFFFF", "--content": "'Publicar.'", "--delay":"3s"}}>
    Publicar.
  </span>
</h1> */}
<div class="Iam">
<h1>SOMOS</h1>
<b>
  <div class="innerIam">
    DISEÑO.<br /> 
    PROGRAMACIÓN.<br />
    HOSTING.<br />
    SOFTWARE.<br />
    eKODDEX.
    </div>
</b>
</div>  
<Boton/>
<div class="mouse">
        <span></span>
</div>

  </div>
</div>
  );
}

export default Header;
