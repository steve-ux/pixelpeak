import Payoneer from "../assets/logo payoneer.png";
import Paypal from "../assets/logo paypal.png";
import Visa from "../assets/Visa_Logo.png.png";
import Mastercard from "../assets/logo mastercard.png";
import MercadoPago from "../assets/Mercado-Pago-Logo.png";
import Bitcoin from "../assets/logo bitcoin.png";
import Ethereum from "../assets/ethereum-eth-logo.png";
import USDC from "../assets/logo USDC.png";


function Pagos() {
    return (
    <div className="pagos">
     <h3>Medios de pago aceptados</h3>
      <div className="logos">
       <img src={Payoneer} alt="Logo Payoneer" width="9%" className="payoneer"/>
       <img src={Paypal} alt="Logo Paypal" width="9%" className="paypal"/>
       <img src={Visa} alt="Logo Visa" className="visa"/>
       <img src={Mastercard} alt="Logo Mastercard" className="mastercard"/>
       <img src={MercadoPago} alt="Logo MercadoPago" width="9%"className="mercadopago"/>
       <img src={Bitcoin} alt="Logo Bitcoin" width="9%"className="bitcoin"/>
       <img src={Ethereum} alt="Logo Ethereum" className="ethereum"/>
       <img src={USDC} alt="Logo USDCoin" width="9%"className="usdc"/>
    </div>
    </div>
    );
  }
  
  export default Pagos;