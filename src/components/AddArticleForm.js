import React, {useState} from 'react';
import axiosWithAuth from './helpers/axiosWithAuth';

const initialValues = {title: '', description: '', link: '', category: ''}

const AddArticle = (props) => {
    const { categories } = props;
    const [ values, setValues ] = useState(initialValues);

    const getArticles = () => {
        axiosWithAuth().get('https://pintereach-03.herokuapp.com/api/articles')
        .then(res=>{
          console.log(res);
        })
        .catch(err=>{
          console.log(err);
        });
    };

    const addArticle = (article) => {
        axiosWithAuth().post('https://pintereach-03.herokuapp.com/api/articles', article)
        .then(res=>{
          console.log(res);
        })
        .catch(err=>{
          console.log(err);
        });
        getArticles();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addArticle(values);
    };

    const onChange = (e) => {
        let value = e.target.value;

        setValues({
            ...values,
            [e.target.name]: value
        });
    };

    return(
        <div className="add-article">
            <h2>Article Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    label="Title"
                    name="title"
                    value={values.title}
                    placeholder="Title"
                    onChange={onChange}
                />
                <input
                    type="text"
                    label="Description"
                    name="description"
                    value={values.description}
                    placeholder="Description"
                    onChange={onChange}
                />
                <input
                    type="text"
                    label="Url"
                    name="link"
                    value={values.link}
                    placeholder="URL"
                    onChange={onChange}
                />
                <select name="category" id="categoryList" onChange={onChange}>
                    <option key="placeholder">---</option>
                    {categories.map(category=><option key={category.name}>{category.name}</option>)}
                </select>
                <button>Add Article</button>
            </form>
        </div>
    )
}

export default AddArticle;
