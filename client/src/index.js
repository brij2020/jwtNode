import React,{useState}from 'react';
import ReactDOM from "react-dom";
import Login from './component/login';
import InternalRouter from './projectRouter';
import {Provider} from 'react-redux' ;
import configureStore from './store/store';
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
ReactDOM.render( <Provider store={configureStore() }><InternalRouter /> </Provider> , document.getElementById('root'));