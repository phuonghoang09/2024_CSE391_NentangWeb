import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteEmployee = (props) => {
    const { employee, handleDeleteEmployee } = props;

    return (
        <div>
            <button
                className="btn btn-secondary ms-3"
                onClick={() => handleDeleteEmployee(employee.id)}
            >
                <FaTrash />
            </button>
        </div>
    );
};

export default DeleteEmployee;