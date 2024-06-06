import React, { useState } from "react";
import AddNewTask from "./AddNewTask";
import DisplayTasks from "./DisplayTasks";
const MainComponent = () => {
    const [listTasks, setListTasks] = useState(
        [
            { id: '1', name: 'task1' },
            { id: '2', name: 'task2' },
            { id: '3', name: 'task3' }
        ]
    )
    const handleAddNewTask = (taskItem) => {
        setListTasks([taskItem, ...listTasks])
    }
    const handleDeleteTask = (taskItemID) => {
        let listTasksClone = listTasks;
        setListTasks(listTasksClone.filter(task => task.id !== taskItemID));
    }
    const updateTaskList = (updatedTasks) => {
        setListTasks(updatedTasks);
    };

    return (
        <>
            <AddNewTask
                handleAddNewTask={handleAddNewTask} />
            <DisplayTasks
                listTasks={listTasks}
                updateTaskList={updateTaskList}
                handleDeleteTask={handleDeleteTask} />
        </>
    )
}
export default MainComponent;