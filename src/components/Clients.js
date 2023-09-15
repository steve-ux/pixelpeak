import Client1 from "../assets/CLIENT-1.png";
import Client2 from "../assets/CLIENT-2.png";
import Client3 from "../assets/CLIENT-3.png";
import Client4 from "../assets/CLIENT-4.png";
import Client5 from "../assets/CLIENT-5.png"

function Clients() {
    return (
    <div className="clients">
        <section>
            <img src={Client1} alt="Envero Tours, agencia de turismo"/>          
            <img src={Client2} alt="Cabañas Jorgelinas, complejo vacacional"/>
            <img src={Client3} alt="Aserradero Los Andes, de Grupo Puebla"/>
            <img src={Client4} alt="Criptofy, sitio web de criptomonedas"/>
            <img src={Client5} alt="Greco Hermanos, tapas de cilindros"/>
        </section>
        <div className="btnClients">
        <button>VER TRABAJOS</button>
        </div>  
    </div>
    );
  }
  
  export default Clients;