// scss
import "./section2.scss";

// images
import gran from "../../../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../../../assets/home/desktop/image-planalto.png";
import piccollo from "../../../../assets/home/desktop/image-piccollo.png";
import danche from "../../../../assets/home/desktop/image-danche.png";

function Section2() {
  return (
    <section className="section2-container">
      <div className="text_block">
        <h1>our collection</h1>
      </div>
      <div className="row">
        <div className="card">
          <img src={gran} alt="Gran Espresso" />
          <div>
            <h3>Gran Espresso</h3>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>
        </div>
        <div className="card">
          <img src={planalto} alt="Gran Espresso" />
          <div>
            <h3>Planalto</h3>
            <p>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </div>
        </div>
        <div className="card">
          <img src={piccollo} alt="Gran Espresso" />
          <div>
            <h3>Piccollo</h3>
            <p>
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry
            </p>
          </div>
        </div>
        <div className="card">
          <img src={danche} alt="Gran Espresso" />
          <div>
            <h3>Danche</h3>
            <p>
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
