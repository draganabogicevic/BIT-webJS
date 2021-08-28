import React from "react";

import { Link } from 'react-router-dom';

import "./Header.css";


const Header = ({ typeOfView, toggleView, refresh, filterUsers}) => {
    let buttonIcon;  
    if(typeOfView) {
        buttonIcon = <i className="fas fa-grip-horizontal"></i>
    } else {
        buttonIcon = <i className="fas fa-list-ul"></i>
    }


    return (<div>
                <nav className="p-2 bg-danger mb-2">
                    <div className="container-fluid">
                        <h1 className="h1 text-light text-center"><Link to="/home">BIT Persons</Link></h1>
                        <div className="group">
                            <button className="btn btn-outline-light about"><Link to="/about">About</Link></button>
                            <button className="btn btn-outline-light refresh" onClick={refresh}><i className="fa fa-repeat" aria-hidden="true"></i></button>
                            <button className="btn btn-outline-light float-end toggle" onClick={toggleView}>{buttonIcon}</button>
                        </div>
                    </div>
                </nav>
                <div className="container">
                <div className="form-group">
                    <input type="text" placeholder="Search users" className="form-control m-3" name="searchBar" onChange={filterUsers}/>
                </div>
            </div>
        </div>
            )
}   
export default Header;