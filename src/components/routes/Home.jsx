import Hero from "../Hero";
import Navbar from "../Navbar";
import Destination from "../Destination";
import Trip from "../Trip";
import Footer from "../Footer";

function Home() {
  return (
    // this is a empty figment

    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.squarespace-cdn.com/content/v1/61728040e0eb8b2a323af0b3/a569b2b4-95e3-45fc-b18a-11d43d415b0d/IMG_9709.jpg"
        title="Your Journey Your Stroy"
        text="Choose your favourite Destination"
        buttonText="Travel plan"
        url="/"
        btnClass="show"
      />
      <Destination /> 
      <Trip/>
      <Footer/>
      
      
    </>
  );
}
export default Home; // we give premission to another file to use the data
