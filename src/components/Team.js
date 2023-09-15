import Imagen1 from "../assets/Yo_PixelPeak.jpg";
import Imagen2 from "../assets/Nico_PixelPeak.jpg";
import Imagen3 from "../assets/Lucho_PixelPeak.jpg";

function Team () {
    return (
        <div className="team">
        <div class="box">
      <div class="card">
        <div class="imgBx">
            <img src={Imagen1} alt="Esteban Maldonado de Frontend"/>
            <p>Influenciado por la estética de la cultura pop de películas, videojuegos, o música de los '80s, '90s, '00s', y de creatividad innata, su prioridad es el buen diseño. Detallista, minimalista y moderno, su meta es lograr que el estilo de tu proyecto se lleve la mejor primera impresión.</p>
        </div>
        <div class="details">
            <h2>ESTEBAN MALDONADO<br/><span>FRONTEND</span></h2>
        </div>
      </div>
    
       <div class="card">
         <div class="imgBx">
            <img src={Imagen3} alt="Luciano Turco de Backend"/>
            <p>Con su enfoque metódico y su pasión por el desarrollo, nuestro Mago del Backend es el maestro de los códigos y los algoritmos. Convierte líneas de texto en una sinfonía digital, creando sistemas y funcionalidades que hacen que nuestros proyectos cobren vida. Con él podés hablar de fútbol, juegos de rol o cómics.</p>
         </div>
         <div class="details">
            <h2>LUCIANO TURCO<br/><span>BACKEND</span></h2>
          </div>
       </div>

       <div class="card">
         <div class="imgBx">
            <img src={Imagen2} alt="Nicolás Hidalgo de Marketing"/>
            <p>Experto en el mundo del marketing digital, tiene una habilidad para llevar las marcas al siguiente nivel. Con su creatividad y enfoque profesional, siempre se asegura de lograr sus objetivos. Cuando no está creando estrategias de marketing, nuestro loco rockero está en el escenario, dando lo mejor con su banda.</p>
         </div>
         <div class="details">
            <h2>NICOLÁS HIDALGO<br/><span>MARKETING</span></h2>
          </div>
       </div>
  </div>
  </div>
    );
    
}

export default Team;