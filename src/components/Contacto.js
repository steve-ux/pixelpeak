import Graphic from "../assets/graph1.png";
import Graphic2 from "../assets/graph2.png";
import Graphic3 from "../assets/graph3.png";
import ContactPhone from "../assets/pixelpeak-contact.mov";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "./Form";
import TextContact from "./TextContact";

function Contacto() {
    return (
    <div className="contactoPage">
        {/* <img src={ContactPhone} alt="Smartphone para contactarse" width="1000" className="phoneContact"/> */}
        <video className="videoContact" autoPlay loop muted>
      <source src={ContactPhone} type="video/mp4" />
      </video>
      <div class="mouse">
        <span></span>
      </div>
      <br/><br/>
      <Navbar/>
      <h2>ESTÁS A<br/>
      UN FORMULARIO <br/>
      DE<br/>
      <span className="evolucionar">EVOLUCIONAR</span>
      </h2>
      <TextContact/>
      <Form/>
      <div className="fondoContact">      
      <h2><span>[ ¿QUÉ SIGUE? ]</span></h2>
      <h2><span className="numberSpan"># 1</span></h2>

      <div className="descriptionContact2" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">
        <div><img src={Graphic} alt="Smartphone para contactarse" width="500" className="graphic"/></div>
        <div className="textDescriptionContact">
        <p className="textPasos">Nos contactamos con vos para hablar más de tu idea o proyecto. No queremos dejar ningún detalle fuera para poder armarte un presupuesto personalizado. <span className="resaltados">Se estiman plazos de entrega y costos.</span></p>
        </div>
      </div>
      
      
      <h2><span className="numberSpan"># 2</span></h2>

      <div className="descriptionContact2" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">
        <div className="textDescriptionContact">
        <p className="textPasos">Te presentamos el presupuesto para su <span className="resaltados">aprobación,</span> de ser necesario, se charlan nuevas condiciones hasta visualizar mejor tu proyecto.</p>
        </div>
        <div> <img src={Graphic2} alt="Smartphone para contactarse" width="500" className="graphic2"/></div>
      </div>

      <h2><span className="numberSpan"># 3</span></h2>

      <div className="descriptionContact2" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">
        <div><img src={Graphic3} alt="Smartphone para contactarse" width="500" className="graphic3"/></div>
        <div className="textDescriptionContact">
        <p className="textPasos">¡Manos a la obra! Damos vida a tu idea. Permanecemos en una constante comunicación para mostrarte los avances e ir ajustándolo de ser necesario. <span className="resaltados">Tu web lista en 3 simples pasos.</span></p>
        </div>
      </div>
      
      
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
    );
  }
  
  export default Contacto;