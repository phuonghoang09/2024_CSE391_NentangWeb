import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const DisplayTasks = (props) => {

    const { listTasks, updateTaskList, handleDeleteTask } = props;

    const [name, setName] = useState('')


    useEffect(() => {
        if (listTasks.length === 0) {
            alert("You deleted all the tasks");
        }
        console.log(">>call me effect");
    }, [listTasks]);

    const [editMode, setEditMode] = useState(false);
    const [editedTask, setEditedTask] = useState(null);

    const handleEditTask = (taskId) => {
        const taskToEdit = listTasks.find((task) => task.id === taskId);

        if (taskToEdit) {
            setEditMode(true);
            setEditedTask({ ...taskToEdit });
        }
        setName('')
    };

    const handleSaveEdit = () => {
        if (editedTask) {
            const updatedTasks = listTasks.map((task) => {
                if (task.id === editedTask.id) {
                    return { ...task, name: editedTask.name };
                }
                return task;
            });
            updateTaskList(updatedTasks);

            setEditMode(false);
            setEditedTask(null);
        }
    };

    const handleCancelEdit = () => {
        setEditMode(false);
        setEditedTask(null);
    };

    return (
        <>
            {listTasks.map((task) => (
                <div key={task.id} className="container taskItem p-3">
                    {editMode && editedTask && editedTask.id === task.id ? (
                        <div>
                            <input
                                type="text"
                                value={editedTask.name}
                                onChange={(e) =>
                                    setEditedTask({ ...editedTask, name: e.target.value })
                                }
                            />
                            <button className="btn btn-secondary mx-2" onClick={() => handleSaveEdit()}>Save</button>
                            <button className="btn btn-secondary" onClick={() => handleCancelEdit()}>Cancel</button>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-between">
                            <div>{task.name}</div>
                            <div>
                                <button className="btn btn-secondary me-2" onClick={() => handleEditTask(task.id)}>Edit</button>
                                <button className="btn btn-secondary" onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default DisplayTasks;