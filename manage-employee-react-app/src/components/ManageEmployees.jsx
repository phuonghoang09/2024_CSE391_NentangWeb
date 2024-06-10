import React, { useState } from 'react';
import ModalCreateUser from './ModalCreateEmployee';
import ModalCreateEmployee from './ModalCreateEmployee';
import DisplayEmployees from './DisplayEmployees';
import { FaPlusCircle } from 'react-icons/fa';

const ManageEmployees = () => {
    const [listEmployees, setListEmployees] = useState([
        { id: '1', name: 'Nguyen Van A', birthDay: '2004-01-05', email: 'vana@gmail.com', address: 'Hanoi', phone: '(012)333- 7777' },
        { id: '2', name: 'Hoang Van B', birthDay: '2004-01-05', email: 'vana@gmail.com', address: 'Hanoi', phone: '(012)333- 7777' },
        { id: '3', name: 'Do Van C', birthDay: '2004-01-05', email: 'vana@gmail.com', address: 'Hanoi', phone: '(012)333- 7777' }
    ]);

    const [showModalCreateEmployee, setShowModalCreateEmployee] = useState(false)
    const handleAddNewEmployee = (employee) => {
        setListEmployees([employee, ...listEmployees]);
    }
    const handleDeleteEmployee = (employeeID) => {
        let listEmployeesClone = [...listEmployees];

        let updatedListEmployees = listEmployeesClone.filter((emp) => emp.id !== employeeID);
        setListEmployees(updatedListEmployees);
    }

    const handleUpdateEmployee = (updatedEmployees) => {
        setListEmployees(updatedEmployees);
    }
    return (
        <div className='manageContainer container text-bg-light mt-5 p-3'>

            <div className='container d-flex justify-content-between'>
                <div className='container d-flex justify-content-between'>
                    <div className=' title h1'>
                        Manage Employess
                    </div>
                    <div className='featureButton'>
                        <button className='btn btn-primary' onClick={() => { setShowModalCreateEmployee(true) }} >
                            <FaPlusCircle /> Add New Employee
                        </button>
                        <ModalCreateEmployee
                            show={showModalCreateEmployee}
                            setShow={setShowModalCreateEmployee}
                            handleAddNewEmployee={handleAddNewEmployee} />
                    </div>
                </div>
            </div>
            <div className='tableEmployees container mt-5'>
                <DisplayEmployees
                    listEmployees={listEmployees}
                    handleUpdateEmployee={handleUpdateEmployee}
                    handleDeleteEmployee={handleDeleteEmployee} />
            </div>
        </div>
    )
}
export default ManageEmployees;
