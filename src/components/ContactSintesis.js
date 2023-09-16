import "../styles/formHome.scss";
import DataCenter from "../assets/datacenter-creativo.jpeg";

function ContactSintesis() {
    return (
    <div className="contactSintesis">
        <div class="container">
    <img 
      src={DataCenter}
      alt="Cellphones"/>
    <div class="container-text">
      <h2>[ Permanezcamos conectados ]</h2>
      <p>Dejanos tu correo electrónico y te contactamos a la brevedad. <br/>Además te suscribirás al newsletter de PixelPeak para enterarte siempre de las últimas novedades que tenemos para vos.<br/> Prometemos no mandarte spam.</p>
      <form action="#" name="contact" method="POST" data-netlify="true">
      <input type="email" id="email" name="Correo" placeholder="Email" required/>
      <button type="submit">Suscribirse</button>
      </form>
    </div>
  </div>
  
    </div>
    );
  }
  
  export default ContactSintesis;