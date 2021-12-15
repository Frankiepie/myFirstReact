import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import employeeServices from "../services/employeeServices"
import background from '../imports/wall.jpg';


const Employee = () => {
    const[employees, setEmployees] = useState([])

    useEffect(
        () => {
            refreshEmployeeTable();
        }
    )

    const refreshEmployeeTable = () =>{
        employeeServices.getEmployees()
            .then(
                response =>{
                    setEmployees(response.data)
                }
            )
            .catch(
                () => {
                    console.log("sorry it stopped working. godbless")
                }
            )
    }

    const deleteEmployee = (employeeId) =>{
        employeeServices.deleteEmployee(employeeId)
        .then(
            response =>{
                console.log("Successfully deleted employee!")
                refreshEmployeeTable();
            }
        )
        .catch(
            error=>{
                console.error("Something went wrong!", error)
            }
        )
    }
    return(
        <div style={{ backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'}}>
        <div>
            &nbsp; 
            <h2 class="fw-bold">Members</h2>
            <div className="container">
                <table className="table" border = "1" >
                    <thead className="table table-dark">
                    <tr>
                        <td class="fw-bold">Name</td>
                        <td class="fw-bold">Nickname</td>
                        <td class="fw-bold">Instrument</td>
                        <td class="fw-bold">Action</td>
                    </tr>
                    </thead>
                     {
                         employees.map(
                            employee => (
                                <tbody>
                                <tr className="table-light" key={employee.employeeId}>
                                    <td>{employee.name}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.location}</td>
                                    <td>
                                        <div class="d-grid gap-2 d-md-flex">
                                            <Link className="btn btn-primary" to={`/myfirstreact/edit/${employee.employeeId}`}>Update</Link>
                                            <button className="btn btn-danger" onClick={(e) => deleteEmployee(employee.employeeId)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            )
                         )
                     }
                </table>
            </div>
        </div>
        </div>
    )
}

export default Employee