import React,{useState}from 'react';
import ReactDOM from "react-dom";
import Login from './component/login'
import InternalRouter from './projectRouter'
function App () {
    const [counter,setCounter] = useState(0)
    return (<div>
        <Login />
        Hello React Sckelton <p>{counter}</p> 
        <div className="counter">
            <button onClick={()=>setCounter(counter+1)}>+</button>    
        </div>
    </div>)
}
ReactDOM.render(<InternalRouter /> , document.getElementById('root'));