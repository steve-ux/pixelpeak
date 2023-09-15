import Header from "../components/Header";
import Nosotros from "../components/NosotrosSintesis";
import Clients from "../components/Clients";
import AboutUs from "../components/AboutUsSintesis";
import Footer from "../components/Footer";
import ContactSintesis from "../components/ContactSintesis";

function Home() {
    return (
    <div className="home">
    <Header/>
    <Nosotros/>
    <Clients/>
    <AboutUs/>
    <ContactSintesis/>
    <Footer/>
    </div>
    );
  }
  
  export default Home;