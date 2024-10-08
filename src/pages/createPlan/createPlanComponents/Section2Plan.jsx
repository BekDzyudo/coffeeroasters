// style
import "./section2Plan.scss";

function Section2Plan() {
  return (
    <section className="section2Plan-container">
      <div className="status">
        <div className="line"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <div className="row">
        <div className="card">
          <h1>01</h1>
          <div>
            <h2>Pick your coffee</h2>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
        </div>
        <div className="card">
          <h1>02</h1>
          <div>
            <h2>Choose the frequency</h2>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
        </div>
        <div className="card">
          <h1>03</h1>
          <div>
            <h2>Receive and enjoy!</h2>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2Plan;
