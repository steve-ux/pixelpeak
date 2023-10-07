import { useNavigate } from "react-router-dom";
import "../styles/form.scss";

function Formulario() {

  let navigate = useNavigate()
  const submitHandler = (e) =>{
    e.preventDefault();
    let myForm = document.getElementById("data-form");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate('/FormEnviado'))
      .catch((error) => alert(error));
  }

  return (
    <>
  <div className="formContact">
<div class="containerForm">
<div class="left">
  <div class="headerForm">
    <h2 class="animation a1">[ Comencemos ]</h2>
    <h4 class="animation a2">Completalo y nos comunicamos a la brevedad. Los campos con * son obligatorios.</h4>
  </div>

  <form onSubmit={submitHandler} id="data-form" name="DataBase" method="POST" data-netlify="true">
  <div class="form">
  <input type="hidden" name="form-name" value="DataBase"/>
  <input type="text" id="nombre" name="Nombre" class="form-field animation a3" placeholder="*Nombre" required/>

    <input type="email" id="mail" name="Correo" class="form-field animation a3" placeholder="*Email" required/>

    <input type="number" id="telefono" name="Teléfono" class="form-field animation a3" placeholder="*Teléfono. Ej: +54 9 261 212 1844" required/>

    <input type="text" id="proyect" name="Marca o proyecto" class="form-field animation a4" placeholder="Tu marca o empresa"/>

    <textarea type="text" id="msj" name="Mensaje" class="form-field animation a3" placeholder="Idea detallada"/>

    {/* <p class="animation a5"><a href="#">Al enviar el formulario aceptas los términos y condiciones.</a></p> */}

    <button type="submit" class="animation a6">ENVIAR</button>
  </div>
  </form>
</div>
<div class="right"></div>
</div>
  </div>
    </>
  );
}

export default Formulario;