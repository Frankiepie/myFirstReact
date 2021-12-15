import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Employee from "./Employee";
import AddEmployee from "./AddEmployee";

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path ="/" element={<Home/>}/>
                    <Route exact path="*" element={<PageNotFound/>}/>
                    <Route exact path="/employees" element={<Employee/>}/>
                    <Route exact path="/add" element={<AddEmployee/>}/>
                    <Route exact path="/myfirstreact/edit/:employeeId" element={<AddEmployee/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router