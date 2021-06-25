import React, { useState, useEffect } from "react";
import AddArticleForm from "./AddArticleForm";
import AddCategoryForm from "./AddCategoryForm";
import Categories from "./Categories";
import Articles from "./Articles";
import axiosWithAuth from "./helpers/axiosWithAuth";

import "../Styles/ManagerPage.css";

const initialNewCategoryValue = "";

const endpoint = 'https://pintereach-03.herokuapp.com';

const Manager = () => {
  const [newCategoryValue, setNewCategoryValue] = useState(initialNewCategoryValue);
  const [userId] = useState(window.localStorage.getItem("userId"));
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [articles, setArticles] = useState([]);

  const getAllArticles = async () => {
    axiosWithAuth().get(`${endpoint}/api/articles`)
    .then(res => {
      const usersArticles = res.data.filter(article => article.user_id == userId);
      setArticles(usersArticles);
      console.log(articles);
    });
  };

  const getArticles = async () => {
    axiosWithAuth().get(`${endpoint}/api/articles`)
    .then(res => {
      const usersArticles = res.data.filter(article => article.user_id == userId && article.category == selectedCategory);
      setArticles(usersArticles);
      console.log(articles);
    });
  };

  const deleteArticle = (id) => {
    axiosWithAuth().delete(`${endpoint}/api/articles/${id}`)
    .then(res=>{
      getArticles();
    })
    .catch(err=>{
    });
  };

  const getCategories = async () => {
    axiosWithAuth().get(`${endpoint}/api/categories`)
    .then(res => {
      const usersCategories = res.data.filter(category => category.user_id == userId);
      setCategories(usersCategories);
    });
  };

  const addCategory = (categoryName) => {
    const category = { name: categoryName };

    axiosWithAuth().post(`${endpoint}/api/categories`, category)
    .then(res=>{
      getCategories();
    })
    .catch(err=>{
    });
  };

  const deleteCategory = (id) => {
    axiosWithAuth().delete(`${endpoint}/api/categories/${id}`)
    .then(res=>{
      getCategories();
    })
    .catch(err=>{
    });
  };

  useEffect(() => {
    getCategories();
    getAllArticles();
  }, []);

  useEffect(() => {
    if (selectedCategory === '') {
      getAllArticles();
    }
    else {
      getArticles();
    }
  }, [selectedCategory]);

  return (
    <div id="main">

      <AddCategoryForm
        addCategory={addCategory}
        newCategoryValue={newCategoryValue}
        setNewCategoryValue={setNewCategoryValue}
      />

      <AddArticleForm categories={categories}/>

      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        deleteCategory={deleteCategory}
      />

      <Articles selectedCategory={selectedCategory}
        articles={articles}
        deleteArticle={deleteArticle}
      />

    </div>
  );
};

export default Manager;
