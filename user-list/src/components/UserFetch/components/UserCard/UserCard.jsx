import React from "react";

import { getDateOfBirth } from "../Functions/getDateOfBirth";
import { getEmail } from "../Functions/getEmail";

import "./UserCard.css"

const UserCard = ({ userData }) => {
    
    const toRender = userData.results.map((data, index) => {
    let dateOfBirth = data.dob.date.slice(8, 10);
    let monthOfBirth = data.dob.date.slice(5, 7);
    let yearOfBirth = data.dob.date.slice(0, 4);


   return  (<div className="card  text-dark m-3" id={data.gender} key={index}>
                <img className="card-img-top" src={data.picture.large} alt="CardImg" />
                <div className="card-img-overlay">
                    <p className="card-title text-light">{data.name.first}</p>
                </div> 
                <div className="card-body">
                    <p className="card-text"><b>email:</b> {getEmail(data.email)}</p>
                    <p className="card-text"><b>date of birth:</b> {getDateOfBirth(yearOfBirth, monthOfBirth, dateOfBirth)}</p>
                </div>
            </div>
            )
    })

    
    return <div className="row m-5">{toRender}</div>
            
      
    
}
export default UserCard ;

