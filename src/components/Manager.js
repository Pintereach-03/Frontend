import React, { useState, useEffect } from "react";
import AddArticleForm from "./AddArticleForm";
import Categories from "./Categories";
import Articles from "./Articles";
import axiosWithAuth from "./helpers/axiosWithAuth";

const initialNewCategoryValue = "";

const Manager = () => {
  const [newCategoryValue, setNewCategoryValue] = useState(initialNewCategoryValue);
  const [userId] = useState(window.localStorage.getItem("userId"));
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [articles, setArticles] = useState([]);
  

  const getArticles = async () => {
      axiosWithAuth().get(`https://pintereach-03.herokuapp.com/api/articles`)
      .then(res => {
        const usersArticles = res.data.filter(article => article.user_id == userId && article.category == selectedCategory);
        setArticles(usersArticles);
        console.log(articles);
      })
  }

  const deleteArticle = (id) => {
    axiosWithAuth().delete(`https://pintereach-03.herokuapp.com/api/articles/${id}`)
    .then(res=>{
      getArticles();
    })
    .catch(err=>{
    });
  }

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
    })
    .catch(err=>{
    });
  }

  const deleteCategory = (id) => {
    axiosWithAuth().delete(`https://pintereach-03.herokuapp.com/api/categories/${id}`)
    .then(res=>{
      getCategories();
    })
    .catch(err=>{
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(newCategoryValue);
  }

    const onChange = (e) => {
        let value = e.target.value;

        setNewCategoryValue(value);
    };

  useEffect(() => {
    getCategories();
  },[]);

  return (
    <div id="main">

      <AddArticleForm categories={categories}/>

      <section className="middle-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            label="Category"
            name="category"
            value={newCategoryValue}
            placeholder="Enter a new category..."
            onChange={onChange}
          />
          <button>Add New Category</button>
        </form>
        <Categories categories={categories}
        setSelectedCategory={setSelectedCategory}
        deleteCategory={deleteCategory}
        getArticles={getArticles}/>

        <Articles selectedCategory={selectedCategory}
        articles={articles}
        deleteArticle={deleteArticle}/>

      </section>

    </div>
  );
};

export default Manager;
