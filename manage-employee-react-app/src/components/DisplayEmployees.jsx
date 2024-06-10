import React from "react";
import { Table } from "react-bootstrap";
import EditInfoEmployee from "./EditInfoEmployee";
import DeleteEmployee from "./DeleteEmployee";

const DisplayEmployees = (props) => {
    const { listEmployees, handleUpdateEmployee, handleDeleteEmployee } = props;

    const handleUpdateEmployeeData = (updatedEmployee) => {
        const updatedEmployees = listEmployees.map((employee) => {
            if (employee.id === updatedEmployee.id) {
                return updatedEmployee;
            }
            return employee;
        });

        handleUpdateEmployee(updatedEmployees);
    };

    return (
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Birthday</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {listEmployees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.birthDay}</td>
                        <td>{employee.email}</td>
                        <td>{employee.address}</td>
                        <td>{employee.phone}</td>
                        <td>
                            <div className="d-flex">
                                <EditInfoEmployee
                                    employee={employee}
                                    handleUpdateEmployee={handleUpdateEmployeeData}
                                />
                                <DeleteEmployee
                                    employee={employee}
                                    handleDeleteEmployee={handleDeleteEmployee}
                                />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default DisplayEmployees;