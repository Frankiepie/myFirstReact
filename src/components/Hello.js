import { useEffect, useState } from "react";
import helloServices from "../services/helloServices";

//class - stateful functions
//functions - stateless
// react - reactive 
const Hello = () =>{

//->react hooks useState
const[hello, setHello] = useState("YAWA")

//->react hooks useEffect
//axios - tool for http request prmoises
//promises - asych processes
useEffect( () =>{ //anonymous function
    helloServices.getHello() //promise
    .then(response =>{
        setHello(response.data)
    })
    .catch(error => {
        console.log("Something went wrong!")
    })
}
)

    return hello;
}

export default Hello