import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";
import ContactFrom from "../ContactFrom";

function Contact() {
  return (
    // this is a empty figment
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://assets.cntraveller.in/photos/65ddb9c08bb41e2050b3b087/16:9/w_6000,h_3375,c_limit/ladakh.jpg"
        title="Contact"
      />
      <ContactFrom />
      <Footer />
    </>
  );
}

export default Contact;
