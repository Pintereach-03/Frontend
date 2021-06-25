import React from "react";
import "../Styles/ErrorPage.css";

const Error = () => {

  return (
    <div id="error">
      <div className="cta">
      <h1>404</h1>
      <h3>Not Found</h3>
      </div>
      <br/>
      <div className="description">
        <p>The page was not found.</p>
      </div>
    </div>

  );
};

export default Error;
