import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusCircle } from "react-icons/fa";

const ModalCreateEmployee = (props) => {
    const { show, setShow, handleAddNewEmployee } = props;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [employee, setEmployee] = useState({ name: '', birthDay: '', email: '', address: 'Hanoi', phone: '' })
    
    const [validated, setValidated] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        }

        handleAddNewEmployee({
            id: Math.floor(Math.random() * 100) + 1,
            name: employee.name,
            birthDay: employee.birthDay,
            email: employee.email,
            address: employee.address,
            phone: employee.phone
        });

        setEmployee({ name: '', birthDay: '', email: '', address: 'Hanoi', phone: '' });
        handleClose();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id='mainForm' onSubmit={handleOnSubmit}>
                        <div className='w-75 d-flex align-items-center mb-3'>
                            <label className='form-label w-25'>Name:</label>
                            <input
                                type="text"
                                id='name'
                                className={`form-control ${validated && !employee.name ? 'is-invalid' : ''}`}
                                value={employee.name}
                                placeholder='Nguyen Van A'
                                required
                                onChange={(event) => {
                                    setEmployee({ ...employee, name: event.target.value });
                                    setValidated(false);
                                }}
                            />
                        </div>
                        <div className='w-75 d-flex align-items-center mb-3'>
                            <label className='form-label w-25'>Birthday:</label>
                            <input
                                type="date"
                                id='birthDay'
                                className='form-control'
                                value={employee.birthDay}
                                onChange={(event) => setEmployee({ ...employee, birthDay: event.target.value })}
                            />
                        </div>
                        <div className='w-75 d-flex align-items-center mb-3'>
                            <label className='form-label w-25'>Email:</label>
                            <input
                                type="email"
                                name='email'
                                id='email'
                                className={`form-control ${validated && !employee.email ? 'is-invalid' : ''}`}
                                value={employee.email}
                                placeholder='@gmail.com'
                                required
                                onChange={(event) => {
                                    setEmployee({ ...employee, email: event.target.value });
                                    setValidated(false);
                                }}
                            />
                        </div>
                        <div className='w-75 d-flex align-items-center mb-3'>
                            <label className='form-label w-25'>Address:</label>
                            <select
                                id='address'
                                className="form-control form-select w-100"
                                value={employee.address}
                                onChange={(event) => setEmployee({ ...employee, address: event.target.value })}
                            >
                                <option value='Hanoi'>Hanoi</option>
                                <option value='HCM'>HCM</option>
                            </select>
                        </div>
                        <div className='w-75 d-flex align-items-center mb-3'>
                            <label className='form-label w-25'>Phone:</label>
                            <input
                                type="tel"
                                id='phone'
                                className={`form-control ${validated && !employee.phone ? 'is-invalid' : ''}`}
                                value={employee.phone}
                                placeholder='(xxx)yyy-zzzz'
                                required
                                onChange={(event) => {
                                    setEmployee({ ...employee, phone: event.target.value });
                                    setValidated(false);
                                }}
                            />
                        </div>
                        <div className='btn'>
                            <button className='btn btn-primary' type='submit'>Save Changes</button>
                            <button className='btn btn-secondary mx-3' onClick={handleClose}>Cancel</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalCreateEmployee;