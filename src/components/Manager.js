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
    </div> // #main div end
  );
};

export default Home;
