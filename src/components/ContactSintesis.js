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
      <form action="/Contact" name="contact" method="POST" netlify>
      <input type="email" id="email" name="Correo" placeholder="Email" required/>
      <button type="submit">Suscribirse</button>
      <input type="hidden" name="_next" value="#"/>
    <input type="hidden" name="_subject" value="Nuevo correo para el newsletter. Mandar info."/>
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="box"/>
      </form>
    </div>
  </div>
  
    </div>
    );
  }
  
  export default ContactSintesis;