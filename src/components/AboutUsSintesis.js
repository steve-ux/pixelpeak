import Videoloop from "../assets/background-aboutus.mp4";

function AboutUs() {
    return (
        <>
    <div className="aboutUs">
      <div>
    <p>Nuestra meta, <br/> <span>conectarte</span> al mundo.</p>
    <button>Sobre Nosotros</button>
    </div>
        <video className="video2" autoPlay loop muted>
      <source src={Videoloop} type="video/mp4" />
      </video>
    </div>
    </>
    );
  }
  
  export default AboutUs;