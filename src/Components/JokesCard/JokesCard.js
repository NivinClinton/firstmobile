import React from 'react'
import './JokesCard.css'

function JokesCard({data}) {
    const {category, joke} = data
    
    return (
        <div className="jokesCard card-group col-md-6 ">
            <div className="card ">
               
                <div className="card-body">
                    <h5 className="card-title">{category}</h5>
                    <p className="card-text">{joke}</p>
                    <a href="#" className="btn text-align-center ">Read More</a>
                </div>
            </div>  

        </div>
    )
}

export default JokesCard