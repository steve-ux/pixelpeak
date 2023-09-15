import Linkedin from "../assets/LinkedIn-green.png";
import Instagram from "../assets/Instagram-green.png";
import WhatsApp from "../assets/WhatsApp-green.png";

function Footer() {
    return (
    <div className="footer">
      <div className="infoContact">
        <div className="textFooter">
        <p>NUESTRO CORREO ELECTRÓNICO PARA CONSULTAS: <span><a href="mailto:info@pixelpeak.ar">INFO@PIXELPEAK.AR</a></span>. <br/>PODÉS UBICARNOS EN <span><a href="https://goo.gl/maps/Drf3oXXPZtwBR7QW9" target="_blank" rel="noopener noreferrer">ESPAÑA 985</a></span> DE CIUDAD, CP5500 MZA.<br/> HORARIOS DE <span>9 A 18 HS</span>. <br/>TEL: <span><a href="tel:2612121844">2612121844</a></span></p>
        </div>
        <div>
        <a href="https://www.linkedin.com/company/pixelpeak/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Logo de LinkedIn" width="50"/></a>
        <a href="https://www.instagram.com/pixelpeak_ar/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Logo de LinkedIn" width="50"/></a>
        <a href="https://api.whatsapp.com/send?phone=5492612121844&text=Hola!%20Visit%C3%A9%20su%20web%20y%20quisiera%20conocer%20m%C3%A1s%20sobre%20sus%20servicios" target="_blank" rel="noopener noreferrer"><img src={WhatsApp} alt="Logo de LinkedIn" width="50"/></a>
        </div>
      </div>
  <footer>
          Copyright ©{" "}
          {new Date().getFullYear()} <span>[ PixelPeak ]</span> Diseño y Programación | Mendoza - Argentina{" "}    
  </footer>
    </div>
    );
  }
  
  export default Footer;