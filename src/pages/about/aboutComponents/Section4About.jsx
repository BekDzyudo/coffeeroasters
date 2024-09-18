// rrd
import { Link } from "react-router-dom";
// style
import "./section4About.scss";
// image
import uk from "../../../../assets/about/desktop/illustration-uk.svg";
import aus from "../../../../assets/about/desktop/illustration-australia.svg";
import can from "../../../../assets/about/desktop/illustration-canada.svg";

function Section4About() {
  return (
    <section className="section4About-container">
      <h1 className="title">Our headquarters</h1>
      <div className="row">
        <div className="card">
          <img src={uk} alt="United Kingdom" />
          <div>
            <h4>United Kingdom</h4>
            <ul>
              <li>
                <Link>68 Asfordby Rd</Link>
              </li>
              <li>
                <Link>Alcaston</Link>
              </li>
              <li>
                <Link>SY6 1YA</Link>
              </li>
              <li>
                <Link>+44 1241 918425</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <img src={can} alt="United Kingdom" />
          <div>
            <h4>Canada</h4>
            <ul>
              <li>
                <Link>1528 Eglinton Avenue</Link>
              </li>
              <li>
                <Link>Toronto</Link>
              </li>
              <li>
                <Link>Ontario M4P 1A6</Link>
              </li>
              <li>
                <Link>+1 416 485 2997</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <img src={aus} alt="United Kingdom" />
          <div>
            <h4>Australia</h4>
            <ul>
              <li>
                <Link>36 Swanston Street</Link>
              </li>
              <li>
                <Link>Kewell</Link>
              </li>
              <li>
                <Link>Victoria</Link>
              </li>
              <li>
                <Link>+61 4 9928 3629</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4About;
