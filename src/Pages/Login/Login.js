import React, { useState } from 'react'
import './Login.css'

function Login() {
    const [username, setUsername] = useState('')
    // const[showUsernameValidation, setShowUsernameValidation]= useState(false);
    const [alphabetValidation, setAlphabetValidation] = useState("valid")
    const [lengthValidation, setLengthValidation] = useState("valid")



    const setUsernameOnchange = (e) => {
        setUsername(e.target.value)
        const alphabet = /^[A-Za-z]+$/;
        if (e.target.value.match(alphabet)) {
            setAlphabetValidation("valid")
        } else {
            setAlphabetValidation("invalid")
        }
    }

    const handlePasswordOnChange = (e) => {
        if (e.target.value.length >= 8) {
            setLengthValidation("valid")
        } else {
            setLengthValidation("invalid")
        }
    }
    return (

        <div className='login d-flex justify-content-center'>
            <form className='loginForm col-sm-10 col-md-4'>
                <h1 >Login</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" value={username}
                        onChange={(e) => setUsernameOnchange(e)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"
                    // onFocus={(e)=>setShowUsernameValidation(true)}
                    // onBlur={(e)=>setShowUsernameValidation(false)}
                    />
                </div>
                {
                    alphabetValidation == "valid" ? null : <p id="letter" style={{ color: 'red' }} class="invalid">
                        <b>Enter only alphabets</b>
                    </p>
                }
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        minlength="8"
                        onChange={(e) => {
                            handlePasswordOnChange(e);
                        }}
                        className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                {
                    lengthValidation == "valid" ? null : <p id="length" style={{ color: 'red' }} class="invalid">
                        Minimum <b>8 characters</b>
                    </p>
                }
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}

export default Login