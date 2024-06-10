import React, { useState } from "react";
import { FaPen, FaPlusCircle } from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";

const EditInfoEmployee = (props) => {
    const { employee, handleUpdateEmployee } = props;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [editedEmployee, setEditedEmployee] = useState(null);

    const handleEditEmployee = () => {
        setEditedEmployee({ ...employee });
        handleShow();
    };

    const handleSaveEdit = (event) => {
        event.preventDefault();

        if (editedEmployee) {
            const updatedEmployees = handleUpdateEmployee(editedEmployee);
            if (updatedEmployees) {
                handleClose();
            }
        }
        setEditedEmployee(null);
    };

    const handleCancelEdit = () => {
        setEditedEmployee(null);
        handleClose();
    };

    return (
        <>
            {editedEmployee && editedEmployee.id === employee.id ? (
                <div>
                    <Button variant="primary" onClick={handleShow}>
                        <FaPlusCircle />
                    </Button>
                    <Modal show={show} onHide={handleClose} size="xl">
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Info Employee</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form id="mainForm" onSubmit={handleSaveEdit}>
                                <div className="w-75 d-flex align-items-center mb-3">
                                    <label className="form-label w-25">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={editedEmployee.name}
                                        placeholder="Nguyen Van A"
                                        onChange={(event) => {
                                            setEditedEmployee({
                                                ...editedEmployee,
                                                name: event.target.value,
                                            });
                                        }}
                                    />
                                </div>
                                {/* Các trường thông tin khác */}
                                <div className="btn">
                                    <button className="btn btn-primary" type="submit"
                                        onClick={handleSaveEdit}
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        className="btn btn-secondary mx-3"
                                        onClick={handleCancelEdit}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>
                </div>
            ) : (
                <div>
                    <button className="btn btn-secondary" onClick={handleEditEmployee}>
                        <FaPen />
                    </button>
                </div>
            )}
        </>
    );
};

export default EditInfoEmployee;