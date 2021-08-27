import React from "react"
import { useState, useEffect, useCallback, useMemo } from "react"

/*
always use the setter for useState
always put a dependency array on useEffect, useCallback, useMemo
to run useEgged only once use an empty array
don't depend on data you set
always add the state you read from to the dependency array
*/

function MyComponent() {
    const [numbers, setNumbers] = useState([]);

    useEffect(()=>{
        fetch("/numbers.json")
                .then((res) => res.json())
                .then((data) => {
                    console.log("data then start")
                    setNumbers(data);
                    console.log(data)
                })
                .catch((error)=>{
                    console.log(error)
                })
    },[])

    const addOne = useCallback(() => {
        setNumbers(currentNumbers=>[...currentNumbers, currentNumbers.length+1])
    },[]);

    const sum = useMemo(()=>(numbers.reduce((a,v) => a+v,0)),[numbers])
    
    const out =  (
        <div>
        <div>{sum}</div>
        <div>Numbers {numbers.map(number => `${number}, `)}</div>
                    <button onClick={addOne}>Add One</button>
        </div>
    )    
    return out;
}

const App = () => {
    return (
        <div>
            <MyComponent />
        </div>
    )
}

export default App
