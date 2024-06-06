import React, { useState } from "react";
const AddNewTask = (props) => {

    const { handleAddNewTask } = props;

    const [name, setName] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();
        handleAddNewTask({
            id: Math.floor(Math.random() * 100) + 1,
            name: name
        })
        setName('')
    }
    const handleInputChange = (event) => {
        setName(event.target.value);
    };
    return (
        <div className="addTaskContainer mb-3">
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <input
                    type="text"
                    className="w-100 form-control" 
                    placeholder="add item ..."
                    value={name}
                    onChange={handleInputChange}
                    
                />
                <button className="btn btn-primary mt-2" type="submit">
                    ADD
                </button>
            </form>
        </div>
    )
}
export default AddNewTask;
