// style
import "./home.scss";

// components
import Section1 from "./homeComponents/Section1";
import Section2 from "./homeComponents/Section2";
import Section3 from "./homeComponents/Section3";
import Section4 from "./homeComponents/Section4";

function Home() {
  return (
    <div className="home">
      <div className="home-container container">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
}

export default Home;
