import React from 'react';

const Categories = (props) => {
    const { categories, setSelectedCategory, getArticles, deleteCategory } = props;

    const setCategory = (categoryName) => {
        setSelectedCategory(categoryName)
        getArticles(categoryName)
    }

    return(
        <div className="categories-card">
            <div className="your-board">
                <h4>Your Board</h4>
                <ul>
                    {categories.map((category) => <div>
                        <button key={category.id} onClick={() => deleteCategory(category.id)}>Delete {category.name}</button>
                        <button key={category.name} onClick={() => setCategory(category.name)}>{category.name}</button>
                        </div>)}
                </ul>
            </div>
        </div>
    )
}

export default Categories;