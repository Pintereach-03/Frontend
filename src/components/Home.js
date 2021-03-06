import React from "react";
import "../Styles/LandingPage.css";

import pic01 from "../images/pic01.jpg";
import pic02 from "../images/pic02.jpg";
import pic03 from "../images/pic03.jpg";

const Home = () => {

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
          <img alt="Article 1" src={pic01} />
          {/* <p>Test</p> */}
        </div>
        <div className="home-div">
          <img alt="Article 2" src={pic02} />
          {/* <p>Test</p> */}
        </div>
        <div className="home-div">
          <img alt="Article 3" src={pic03} />
          {/* <p>Test</p> */}
        </div>
      </section>
    </div>

  );
};

export default Home;
