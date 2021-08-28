import React from 'react';
import ReactDOM from 'react-dom';
import "./Header.css";

function Header() {
    return (
        <nav className="header">
            <div className="container-fluid">
                <h1 className="text-center fw-bold p-3">My React Blog</h1>
            </div>
        </nav>
    );
}

export default Header;