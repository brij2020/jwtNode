import React,{useState} from 'react'
import * as constant from '../Constant'
import verifyCorrectPassword from '../utility/validation'
import axios from 'axios'

function Login(props='') {
    const [ userEmail,setEmail ]    = useState('');
    const [ userPass,setUserPass ]      = useState('')
    
    const setUserEmail = (e) => {
        const email = e.target.value.trim()
        var regx = constant.Email_Regx;
        if(regx.test(String(email).toLowerCase())) {
            setEmail(email)
        } else {
            // handle Error 
        }
       

    }

    const setUserPassword = (e) =>{
        const res = verifyCorrectPassword(e.target.value.trim())
        if(res) {
            setUserPass(e.target.value)
        } else {
            //handle error 
        }
    }

    const Userlogin = (e) => {
        if(userEmail!=="" && userPass !== "") {
            const data ={
            email : userEmail,
            password : userPass
            }
            axios.post('http://localhost:8080/api/user/login',data)
            .then(res => console.log('token',res))
            .catch(error=>console.log(error))
        } else {
            alert('fill correct information ')
        }
        
    }

    return (
        <div id="id01" className="modal">
  
            <div className="modal-content animate">
                <div className="imgcontainer">
                <span  className="close" title="Close Modal">&times;</span>
                <img src="image/img_avatar2.png" alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                <label for="uname"><b>Username</b></label>
                <input 
                    type="text" 
                    placeholder="Enter Username/Email" 
                    name="email" 
                    required 
                    onBlur={(e)=>setUserEmail(e)}
                />

                <label for="psw"><b>Password</b></label>
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    name="psw" 
                    required
                    onBlur={(e)=>setUserPassword(e)}
                    
                />
                    
                <button onClick={(e)=>Userlogin(e)}>Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
                </div>

                <div className="container" style={{"background-color":"#f1f1f1"}}>
                <button type="button"  className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </div>
        </div>
    );
}

export default Login;

