import TechPixel from "../assets/tech-pixelpeak.png";

function TextNosotros() {
    return (
<div className="historiaNosotros">
{/* <p>«Cualquier tecnología suficientemente avanzada es indistinguible de la magia.» decía el escritor de ciencia ficción Arthur C. Clarke</p> */}
<div className="descriptionContact">
    <div>
    <img class="fox" src={TechPixel} alt="Futuro Tech con PixelPeak" width="600"/>
    </div>
    <div className="textDescriptionContact">
    <p>En <span>PixelPeak</span>, creemos en el poder del detalle y la excelencia en cada proyecto. Desde un diseño impactante hasta la implementación de un carrito de compras, ofrecemos <span>soluciones digitales</span> que agregan valor a tu negocio.</p>
    <p>¿Estás listo para potenciar tu <span>presencia digital</span>?</p>
    <p>Bienvenido a PixelPeak, donde la <span>creatividad</span> y el profesionalismo se unen para hacer realidad tus <span>ideas</span>. ¡Crezcamos juntos y dejemos nuestra marca en un mundo cada vez más <span>digital</span>!</p>
    </div>
  </div>
<h2><span>[ FORMULARIO ]</span></h2>
</div>
    );
}

export default TextNosotros;