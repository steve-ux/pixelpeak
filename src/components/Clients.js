import Client1 from "../assets/CLIENT-1.png";
import Client2 from "../assets/CLIENT-2.png";
import Client3 from "../assets/CLIENT-3.png";
import Client4 from "../assets/CLIENT-4.png";
import Client5 from "../assets/CLIENT-5.png";

function redirectToLink(link) {
    window.open(link, '_blank');
  }

function Clients() {
    return (
    <div className="clients">
        <section>
            <img className="pictureClients" src={Client1} alt="Envero Tours, agencia de turismo" onClick={() => redirectToLink('https://enverotours.tur.ar/')}/> <img className="pictureClients" src={Client2} alt="Cabañas Jorgelinas, complejo vacacional" onClick={() => redirectToLink('https://cabanasjorgelinas.com/')}/>
            <img className="pictureClients" src={Client3} alt="Envase Los Andes, de Grupo Puebla" onClick={() => redirectToLink('https://www.envaseslosandes.com/')}/>
            <img className="pictureClients" src={Client4} alt="Criptofy, sitio web de criptomonedas" onClick={() => redirectToLink('https://criptofy.org/')}/>
            <img className="pictureClients" src={Client5} alt="Greco Hermanos, tapas de cilindros" onClick={() => redirectToLink('https://grecohnos.com/')}/>
        </section>
        <div className="btnClients">
        <button>VER TRABAJOS</button>
        </div>  
    </div>
    );
  }
  
  export default Clients;