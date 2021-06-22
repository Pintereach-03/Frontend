import React from "react";

const Home = () => {
  return (
    <div id="main">
      <div className="add-article-btn">
        <button> Add Article </button>
      </div>
      <section className="middle-section">
        <div className="your-board">
          <h4>Your Board</h4>
          <ul>
            <li> category 1</li>
            <li> category 2</li>
            <li> category 3</li>
            <li> category 4</li>
            <li> category 5</li>
          </ul>
        </div>
        <div className="article-cards">
          <div className="card">
            <button className="btn">Article 1</button>
          </div>

          <div className="card">
            <button className="btn">Article 2</button>
          </div>

          <div className="card">
            <button className="btn">Article 3</button>
          </div>
        </div>
      </section>
      {/* section ends here */}
      <footer>
        <h2> Copyright</h2>

        <address>
          Written by{" "}
          <a href="mailto:webmaster@example.com">
            {" "}
            Chelsea Ceballos, Ryan L. Spivey, Hugo Sanchez Orozco{" "}
          </a>
          .<br />
          Visit us at: <br />
          Example.com
          <br />
          123 Washington Street
          <br />
          CA, USA
        </address>
      </footer>
    </div> // #main div end
  );
};

export default Home;