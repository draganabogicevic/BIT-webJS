import React from "react"

import UserFetch from "../UserFetch/UserFetch.jsx";

const Body =(props) => {
    const { typeOfView, userData} = props;
    
    return <UserFetch typeOfView={typeOfView} userData={userData}/>
    
}

export default Body;