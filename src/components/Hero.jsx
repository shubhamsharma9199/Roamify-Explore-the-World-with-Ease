import "./HeroStyle.css";
import PropTypes from "prop-types";

function Hero({ cName, heroImg, altText, title,text, url, btnClass, buttonText }) {
  return (
    <>
      {/* Hero Section */}
      <div className={cName}>
        <img alt={altText} src={heroImg} />

        <div className="hero-text">
          <h1>{title}</h1>
          <p>{text}</p>
          <a href={url} className={btnClass}>
            {buttonText}
          </a>
        </div>
      </div>
    </>
  );
}
Hero.propTypes = {
  cName: PropTypes.string,
  heroImg: PropTypes.string.isRequired,
  altText: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};



export default Hero; // Allow other files to import this component
