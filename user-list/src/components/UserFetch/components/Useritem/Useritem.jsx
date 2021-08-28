import React from "react";

import { getEmail } from "../Functions/getEmail";

import "./UserItem.css"

const UserItem = ({ userData, className}) => {
    

const toRender = userData.results.map((data, index) => {

    let dateOfBirth = data.dob.date.slice(8, 10);
    let monthOfBirth = data.dob.date.slice(5, 7);
    let yearOfBirth = data.dob.date.slice(0, 4);
    
    

    return (<div className={className} id={data.gender}>
        <div className="row">
            <div className="col-md-1" >
                <img className="rounded-circle ml-3" src={data.picture.thumbnail} />
            </div>
            <div className="col-md-7" key={index}>
                <p><b>name:</b> {data.name.first} {data.name.last}</p>
                <p><b>email:</b> {getEmail(data.email)}</p>
                <p><b>date of birth:</b> {dateOfBirth}-{monthOfBirth}-{yearOfBirth}</p>
            </div>    
            
        </div>
    </div> 
  )
})

    return <div>{toRender}</div>
         
    
}
export default UserItem ;
