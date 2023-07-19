import React, { useEffect, useState } from "react";
import Digit from "./Digit";

//created component
const Home = () => {
    let [counter, setCounter] = useState(0)
    useEffect(()=> {
        setInterval(() => {
            setCounter(counter++) 
        }, 1000);
    },[]) 
    return (
        <div className="text-center">
            <Digit banana={Math.floor(counter/10000)}/>
            <Digit banana={Math.floor(counter/1000)}/>
            <Digit banana={Math.floor(counter/100)}/>
            <Digit banana={Math.floor(counter/10)}/>
            <Digit banana={Math.floor(counter/1)}/>
        </div>
    );
};

export default Home;