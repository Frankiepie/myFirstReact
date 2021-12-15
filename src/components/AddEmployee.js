import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import background from '../imports/wall.jpg';
import employeeServices from '../services/employeeServices';
import { useEffect } from 'react';
const AddEmployee = () =>{

    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();
    const {employeeId} = useParams();

    useEffect(
        () =>{
            if(employeeId){
                employeeServices.getEmployee(employeeId)
                .then(
                    response =>{
                        setName(response.data.name);
                        setDepartment(response.data.department);
                        setLocation(response.data.location);
                    }
                )
                .catch(
                    error =>{
                        console.error("error")
                    }
                )
            }
        },[])

    const saveEmployee = (e) =>{
        e.preventDefault();
        
        if(employeeId){
            const employee = {employeeId, name, department, location};
            employeeServices.putEmployee(employee)
            .then(
                response =>{
                    console.log("updated employee!", response.data)
                    navigate("/employees")
                }
            )
            .catch(
                error =>{
                    console.error("something went wrong!")
                }
            )
        }
        else{
        const employee = {name, department, location};
        employeeServices.postEmployee(employee) //promise
        .then(
            response =>{
                console.log("Added new member!", response.data)
                navigate("/employees")
            }
        )
        .catch(
            error =>{
                console.error("Something went wrong! :(")
            }
        )
    }
}
    return(
        <div
        style={{ backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'}}>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" 
                        className="form-control" 
                        value={name}
                        id="name"
                        placeholder="Add band member's name"
                        onChange={
                            (e) =>(
                                setName(e.target.value)
                            )
                        }/>
                    </div>

                    <div className="mb-3">
                        <label for="name" className="form-label">Nickname</label>
                        <input type="text" 
                        className="form-control" 
                        value={department}
                        id="name"
                        placeholder="Add band member's nickname"
                        onChange={
                            (e) =>(
                                setDepartment(e.target.value)
                            )
                        }/>
                    </div>

                    <div className="mb-3">
                        <label for="name" className="form-label">Instrument</label>
                        <input type="text" 
                        className="form-control" 
                        value={location}
                        id="name"
                        placeholder="Add band member's main instrument"
                        onChange={
                            (e) =>(
                                setLocation(e.target.value)
                            )
                        }/>
                    </div>

                <button type="submit" className="btn btn-dark" onClick={(e) => saveEmployee(e)}>Save</button>
                </form>
            </div>
        </div>

    )
}

export default AddEmployee