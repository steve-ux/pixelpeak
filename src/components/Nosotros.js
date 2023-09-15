import Videoloop from "../assets/colibri.mov";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "./Team";
import TextNosotros from "./TextNosotros";

function Nosotros() {
    return (
    <div className="nosotrosPage">
        <video className="videoColibri" autoPlay loop muted>
      <source src={Videoloop} type="video/mp4" />
      </video>
      <Navbar/>
      <h2>CALIDAD <br/>
      DESDE LA UNIDAD <br/>
      MÁS<br/>
      <span>PEQUEÑA.</span></h2>
      <TextNosotros/>
      <Team/>
      <Footer/>
    </div>
    );
  }
  
  export default Nosotros;