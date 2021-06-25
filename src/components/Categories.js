import React, { useState } from 'react';

const Categories = (props) => {
    const [click, setClick] = useState('');

    const { categories, setSelectedCategory, deleteCategory } = props;

    const setCategory = (categoryName) => {
        if (categoryName === '') {
            setSelectedCategory('');
        }
        else {
            setSelectedCategory(categoryName);
        }
    };

    const removeCategory = (categoryName) => {
        if (categoryName) {
            const { id } = categories.find(category => category.name === categoryName);
            deleteCategory(id);
            setSelectedCategory('');
        }
    };

    const onChange = (e) => {
        let value = e.target.value;

        if (value === '---') {
            setClick('');
        }
        else {
            setClick(value);
        }
    };

    return(
        <div className="categories-card">
            <h2>Your Board</h2>
            <select id="categories-dropdown" name="category" onChange={onChange}>
                <option key="placeholder">---</option>
                {
                    categories.map(category =>
                        <option key={category.name}>{category.name}</option>
                    )
                }
            </select>
            <button id="categories-green" onClick={() => setCategory(click)}>Filter</button>
            <button id="categories-red" onClick={() => removeCategory(click)}>Delete</button>
        </div>
    )
}

export default Categories;
