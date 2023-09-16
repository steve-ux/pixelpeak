import React, { useState } from "react";
import "../styles/form.scss";

function Formulario() {

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer cualquier lógica de envío que necesites.
    // Estoy simulando un envío exitoso después de 2 segundos.
    setTimeout(() => {
      setEnviado(true);
      // Después de 2 segundos, oculta el formulario
      document.querySelector(".formContact").classList.add("sent");
    }, 2000);
  };

    return (
      <>
    <div className={`formContact ${enviado ? "sent" : ""}`}>
  <div class="containerForm">
  <div class="left">
    <div class="headerForm">
      <h2 class="animation a1">[ Comencemos ]</h2>
      <h4 class="animation a2">Completalo y nos comunicamos a la brevedad. Los campos con * son obligatorios.</h4>
    </div>
    <form onSubmit={handleSubmit} name="data" method="POST" netlify>
    <div class="form">
    <input type="text" id="text" name="Nombre" class="form-field animation a3" placeholder="*Nombre" required/>
      <input type="email" id="email" name="Correo" class="form-field animation a3" placeholder="*Email" required/>
      <input type="number" id="number" name="Teléfono" class="form-field animation a3" placeholder="*Teléfono. Ej: +54 9 261 212 1844" required/>
      <input type="text" id="texto" name="Marca o proyecto" class="form-field animation a4" placeholder="Tu marca o empresa"/>
      <textarea type="text" id="message" name="Mensaje" class="form-field animation a3" placeholder="Idea detallada"/>
      {/* <p class="animation a5"><a href="#">Al enviar el formulario aceptas los términos y condiciones.</a></p> */}
      <button type="submit" class="animation a6">ENVIAR</button>
      <input type="hidden" name="_next" value="#"/>
    <input type="hidden" name="_subject" value="Nuevo correo para el newsletter. Mandar info."/>
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table"/>
    </div>
    </form>
  </div>
  <div class="right"></div>
</div>
    </div>
    {enviado && (
        <div className="mensajeExito">
          Gracias por enviar su mensaje. Nos pondremos en contacto pronto.
        </div>
      )}
      </>
    );
  }
  
  export default Formulario;