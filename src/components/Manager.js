import React, { useState, useEffect } from "react";
import AddArticle from "./AddArticle";
import axiosWithAuth from "./helpers/axiosWithAuth";

const Manager = () => {
  const [userId] = useState(window.localStorage.getItem("userId"));
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    axiosWithAuth().get(`https://pintereach-03.herokuapp.com/api/categories`)
    .then(res => {
      const usersCategories = res.data.filter(category => category.user_id == userId);
      setCategories(usersCategories);
    })
  }

  const addCategory = (categoryName) => {
    const category = { name: categoryName }

    axiosWithAuth().post('https://pintereach-03.herokuapp.com/api/categories', category)
    .then(res=>{
      getCategories();
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    });
  }

  useEffect(() => {
    getCategories();
  },[]);

  return (
    <div id="main">
      <div className="add-article-btn">
        <button> Add Article </button>
      </div>
      <AddArticle categories={categories}/>
      <section className="middle-section">
        <div className="your-board">
          <h4>Your Board</h4>
          <ul>
            {categories.map((category) => <li>{category.name}</li>)}
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

export default Manager;
