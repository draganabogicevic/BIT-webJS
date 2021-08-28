import React from "react";

import UserItem from "./components/Useritem/Useritem.jsx";
import UserCard from "./components/UserCard/UserCard.jsx";

import "./UserFetch.css";

const UserFetch = (props) => {
   
 
   if(props.typeOfView) {
      return <UserItem userData = {props.userData} className="userItem" />
   } else {
      return <UserCard userData={props.userData} />
   }

}

export default UserFetch;

