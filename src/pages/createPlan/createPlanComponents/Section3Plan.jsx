// style
import "./section3Plan.scss";

// rrd
import { NavLink } from "react-router-dom";
import { useState } from "react";

// image
import upIcon from "../../../../assets/plan/desktop/up icon new.png";
import downIcon from "../../../../assets/plan/desktop/down-icon.png";
import exitIcon from "../../../../assets/plan/desktop/exitIcon.png";

function Section3Plan() {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(true);
  const [active2, setActive2] = useState(true);
  const [active3, setActive3] = useState(true);
  return (
    <section className="section3Plan-container">
      <div className="navbar">
        <ul>
          <li>
            <NavLink>
              <span>01</span>
              <p>Preferences</p>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <span>02</span>
              <p>Bean Type</p>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <span>03</span>
              <p>Quantity</p>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <span>04</span>
              <p>Grind Option</p>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <span>05</span>
              <p>Deliveries</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="accardions-container">
        <div className="accardion">
          <div className="head" onClick={() => setActive(!active)}>
            <h2>How do you drink your coffee?</h2>
            <img src={active ? upIcon : downIcon} alt="" />
          </div>
          {active && (
            <div className="cards">
              <div className="card">
                <h3>Capsule</h3>
                <p>Compatible with Nespresso systems and similar brewers</p>
              </div>
              <div className="card active">
                <h3>Filter</h3>
                <p>
                  For pour over or drip methods like Aeropress, Chemex, and V60
                </p>
              </div>
              <div className="card">
                <h3>Espresso</h3>
                <p>
                  Dense and finely ground beans for an intense, flavorful
                  experience
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="accardion">
          <div className="head" onClick={() => setActive2(!active2)}>
            <h2>What type of coffee?</h2>
            <img src={active2 ? upIcon : downIcon} alt="" />
          </div>
          {active2 && (
            <div className="cards">
              <div className="card">
                <h3>Single Origin</h3>
                <p>
                  Distinct, high quality coffee from a specific family-owned
                  farm
                </p>
              </div>
              <div className="card ">
                <h3>Decaf</h3>
                <p>
                  Just like regular coffee, except the caffeine has been removed
                </p>
              </div>
              <div className="card active">
                <h3>Blended</h3>
                <p>
                  Combination of two or three dark roasted beans of organic
                  coffees
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="accardion">
          <div className="head" onClick={() => setActive3(!active3)}>
            <h2>How much would you like?</h2>
            <img src={active3 ? upIcon : downIcon} alt="" />
          </div>
          {active3 && (
            <div className="cards">
              <div className="card active">
                <h3>250g</h3>
                <p>
                  Perfect for the solo drinker. Yields about 12 delicious cups.
                </p>
              </div>
              <div className="card ">
                <h3>500g</h3>
                <p>
                  Perfect option for a couple. Yields about 40 delectable cups.
                </p>
              </div>
              <div className="card">
                <h3>1000g</h3>
                <p>
                  Perfect for offices and events. Yields about 90 delightful
                  cups.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="order">
          <h3>ORDER SUMMARY</h3>
          <p>
            “I drink my coffee as <span>Filter</span>, with a <span>Decaf</span>{" "}
            type of bean. <span>Decaf</span> ground ala <span>Cafetiére</span>,
            sent to me <span>Every Week</span>.”
          </p>
        </div>
        <div className="btn">
          <button onClick={() => setModal(true)} className="createPlanBtn">
            Create my plan!
          </button>
        </div>
      </div>
      {modal && (
        <div className="orderContent">
          <div className="orderModal">
            <div className="head">
              <img
                onClick={() => setModal(false)}
                className="exitBtn"
                src={exitIcon}
                alt=""
              />
              <h2>Order Summary</h2>
            </div>
            <div className="main">
              <h3>
                “I drink my coffee as <span>Filter</span>, with a{" "}
                <span>Decaf</span> type of bean. <span>Decaf</span> ground ala{" "}
                <span>Cafetiére</span>, sent to me <span>Every Week</span>.”
              </h3>
              <p>
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can
                also be redeemed at the checkout.{" "}
              </p>
            </div>
            <div className="footer">
              <p>$14.00/ mo</p>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Section3Plan;
