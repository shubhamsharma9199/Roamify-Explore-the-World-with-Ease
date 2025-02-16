import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Trip from "../Trip";

function Service(){
    return (
      // this is a empty figment
      <>
        <Navbar />
        <Hero
          cName="hero-mid"
          heroImg="https://www.andbeyond.com/wp-content/uploads/sites/5/snow-leopard-ladakh-leh-india-himilayas7.jpg"
          title="Services"
        />
        <Trip />
        <Footer />
      </>
    );
}

export default Service;// we allow other file to use the data
