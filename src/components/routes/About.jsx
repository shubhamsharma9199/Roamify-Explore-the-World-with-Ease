import Aboutus from "../Aboutus";
import Footer from "../Footer";
import Hero from "../Hero";
import Navbar from "../Navbar";
// import AboutIMg from "../assets/night.jpg"//benefit of creating of variable is that when we want to change the image we only have to change the name of var

function About() {
  return (
    // this is a empty figment
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.blacktomato.com/2024/07/Ladakh3.jpg?auto=compress%2Cformat&fit=crop&h=800&ixlib=php-3.3.1&q=82&w=1520&s=5451be49358d2a7f8142ecf8fbfc2f8d"
        title="About"
        btnClass="hide"
      />
      <Aboutus/>
      <Footer/>
    </>
  );
}

export default About;
