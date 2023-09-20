import React, { useState } from "react";
import "../styles/form.scss";

function Formulario() {

  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
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

    <form onSubmit={handleSubmit} name="DataBase" method="POST" data-netlify="true">
    <div class="form">

    <input type="hidden" name="form-name" value="DataBase"/>

    <input type="text" name="Nombre" class="form-field animation a3" placeholder="*Nombre" required/>

      <input type="email" name="Correo" class="form-field animation a3" placeholder="*Email" required/>

      <input type="number" name="Teléfono" class="form-field animation a3" placeholder="*Teléfono. Ej: +54 9 261 212 1844" required/>

      <input type="text" name="Marca o proyecto" class="form-field animation a4" placeholder="Tu marca o empresa"/>

      <textarea type="text" name="Mensaje" class="form-field animation a3" placeholder="Idea detallada"/>

      {/* <p class="animation a5"><a href="#">Al enviar el formulario aceptas los términos y condiciones.</a></p> */}

      <button type="submit" class="animation a6">ENVIAR</button>
    </div>
    </form>
  </div>
  <div class="right"></div>
</div>
    </div>
    {enviado && (
        <div className="mensajeExito">
           <div class="containerForm">
  <div class="left" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1000">
  <h3 className="titleEnviado">
  <span className="resaltados">¡Tu mensaje fue enviado!</span> A la brevedad vas a ser contactado. Muchas gracias.
  </h3>
  </div>
  <div class="right"></div>
</div>
        </div>
      )}
      </>
    );
  }
  
  export default Formulario;