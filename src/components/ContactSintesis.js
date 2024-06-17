import "../styles/formHome.scss";
import DataCenter from "../assets/datacenter-creativo.jpeg";
import { useNavigate } from "react-router-dom";

function ContactSintesis() {

  let navigate = useNavigate()
  const submitHandler = (e) =>{
    e.preventDefault();
    let myForm = document.getElementById("contact-form");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate('/Enviado'))
      .catch((error) => alert(error));
  }
    return (
    <div className="contactSintesis">
        <div class="container">
    <img 
      src={DataCenter}
      alt="Cellphones"/>
    <div class="container-text">
      <h2>[ Permanezcamos conectados ]</h2>
      <p>Dejanos tu correo electrónico y te contactamos a la brevedad. <br/>Además te suscribirás al newsletter de eKoddex para enterarte siempre de las últimas novedades que tenemos para vos.<br/> Prometemos no mandarte spam.</p>
      <form onSubmit={submitHandler} id="contact-form" name="Newsletter" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Newsletter"/>
      <input type="email" id="email" name="Correo" placeholder="Email" required/>
      <button type="submit">SUSCRIBIRSE</button>
      </form>
    </div>
  </div>
  
    </div>
    );
  }
  
  export default ContactSintesis;