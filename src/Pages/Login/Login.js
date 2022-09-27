import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './Login.css'

function Login(props) {
    
    
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [passwordValidation, setPasswordValidation] = useState(false);
    const [showUsernameValidation, setShowUsernameValidation] = useState(false);

    const [alphabetValidation, setAlphabetValidation] = useState("invalid")
    const [lengthValidation, setLengthValidation] = useState("invalid")

    const handleSubmit = () => {
        if (alphabetValidation == "valid" && lengthValidation == "valid") {
            props.setIsLoggedIn(true)
            navigate('/jokes')
        }
    }

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

    useEffect(() => {
        if (lengthValidation == "valid") {
            setPasswordValidation(false)
        }

    }, [lengthValidation])


    useEffect(() => {
        if (alphabetValidation == "valid") {
            setShowUsernameValidation(false)
        }

    }, [alphabetValidation])

    return (

        <div className='login d-flex justify-content-center'>
            <form className='loginForm col-sm-10 col-md-4' onSubmit={handleSubmit}>
                <h1 >Login</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" value={username}
                        onChange={(e) => setUsernameOnchange(e)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username"
                        onFocus={(e) => setShowUsernameValidation(true)}
                        onBlur={(e) => setShowUsernameValidation(false)}
                    />
                </div>
                {
                    showUsernameValidation ? <p id="letter" style={{ color: 'red' }} class="invalid">
                        <b>Enter only alphabets</b>
                    </p> : null
                }
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        minlength="8"
                        onChange={(e) => {
                            handlePasswordOnChange(e);
                        }}
                        className="form-control" id="exampleInputPassword1" placeholder="Password"
                        onFocus={(e) => setPasswordValidation(true)}
                        onBlur={(e) => setPasswordValidation(false)} />
                </div>
                {
                    passwordValidation ? <p id="length" style={{ color: 'red' }} class="invalid">
                        Minimum <b>8 characters</b>
                    </p> : null
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