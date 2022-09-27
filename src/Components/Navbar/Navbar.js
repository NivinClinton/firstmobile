import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/UserContext'
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate()
    const { setCurrentUser } = useContext(AuthContext)


    const logout = async() => {
        try {
          
            await  localStorage.removeItem('isUser');
          navigate('/login')
          } catch (err) {
            console.log(err);
          }
       
       
    }
    const jokes = () => {
        setCurrentUser(true)
        navigate('/jokes')
    }

    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light " >
                <a className="navbar-brand" href="#" style={{ color: 'blue', fontSize: '30px', fontWeight: 'bolder' }}>First Mobile</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-5">
                        <li className="nav-item active">
                            <a className="nav-link" href="/jokes">
                                <button className="btn btnprimary my-2 my-sm-0" type="submit" onClick={jokes} style={{ color: 'blue', fontSize: '20px', fontWeight: 'bolder' }}>Jokes</button>
                            </a>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={logout} style={{ fontSize: '20px', fontWeight: 'bolder' }}>Logout</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar