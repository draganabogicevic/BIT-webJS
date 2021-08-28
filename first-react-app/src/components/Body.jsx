import React from 'react';
import ReactDOM from 'react-dom';
import "./Body.css";
import data from "../data.js"


function Body() {
    return (
        data.map((item, i) => (
            <div className="wrapper mb-4 ms-4 me-4 p-3" key={i}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
            )
        )
    );
}

export default Body;