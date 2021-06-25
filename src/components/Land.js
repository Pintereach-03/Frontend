import React from "react";
import "../Styles/LandingPage.css";

import screen from "../images/screen.jpg";

const Land = () => {

  return (
    <div id="home">
      <div className="cta">
      <h1>WELCOME</h1>
      <h3>To Your Research Solution</h3>
      </div>
      <br/>
      <div className="description">
        <p> At Pintereach, our mission is to help users research by enabling an easier way to save and organize articles into categories to read later. </p>
      </div>
      <section id="home-section">
        <div className="home-div">
          <img alt="Article Screen" src={screen} />
          {/* <p>Test</p> */}
        </div>
      </section>
    </div>

  );
};

export default Land;
