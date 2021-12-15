import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import Employee from "./Employee";
import Home from "./Home";
import PageNotFound from "./PageNotFound";

const Router =() => {
    return(
       <div>
          <HashRouter basename='/'>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/myfirstreact" element={<Home/>}/>
                <Route exact path="/employees" element={<Employee/>}/>
                <Route exact path="/add" element={<AddEmployee/>}/>
                <Route exact path="/edit/:employeeId" element={<AddEmployee/>}/>
                <Route exact path="*" element={<PageNotFound/>}/>
            </Routes>
           </HashRouter>
       </div>
    )
}
//add myfirstreact to home
export default Router