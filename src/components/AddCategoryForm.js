import React, { useState } from 'react';

const AddCategory = (props) => {

    const { addCategory, newCategoryValue, setNewCategoryValue } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        addCategory(newCategoryValue);
    };

    const onChange = (e) => {
        let value = e.target.value;

        setNewCategoryValue(value);
    };

    return (
        <div className="add-category">
            <h2>Category Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    label="Category"
                    name="category"
                    value={newCategoryValue}
                    placeholder="Category"
                    onChange={onChange}
                />
                <button>Add Category</button>
            </form>
        </div>
    )

}

export default AddCategory;
