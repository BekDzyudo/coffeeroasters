// style
import "./about.scss";

// components
import Section1About from "./aboutComponents/Section1About";
import Section2About from "./aboutComponents/Section2About";
import Section3About from "./aboutComponents/Section3About";
import Section4About from "./aboutComponents/Section4About";

function About() {
  return (
    <div className="about">
      <div className="about-container container">
        <Section1About />
        <Section2About />
        <Section3About />
        <Section4About />
      </div>
    </div>
  );
}

export default About;
