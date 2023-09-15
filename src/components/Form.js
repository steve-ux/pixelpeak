import "../styles/form.scss";

function Formulario() {
    return (
    <div className="formContact">
  <div class="containerForm">
  <div class="left">
    <div class="headerForm">
      <h2 class="animation a1">[ Comencemos ]</h2>
      <h4 class="animation a2">Completalo y nos comunicamos a la brevedad. Los campos con * son obligatorios.</h4>
    </div>
    <div class="form">
    <input type="text" class="form-field animation a3" placeholder="*Nombre" required/>
      <input type="email" class="form-field animation a3" placeholder="*Email" required/>
      <input type="number" class="form-field animation a3" placeholder="*Teléfono. Ej: +54 9 261 212 1844" required/>
      <input type="text" class="form-field animation a4" placeholder="Tu marca o empresa"/>
      <textarea type="text" class="form-field animation a3" placeholder="Idea detallada"/>
      {/* <p class="animation a5"><a href="#">Al enviar el formulario aceptas los términos y condiciones.</a></p> */}
      <button class="animation a6">ENVIAR</button>
    </div>
  </div>
  <div class="right"></div>
</div>
    </div>
    );
  }
  
  export default Formulario;