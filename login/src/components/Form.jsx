import React from "react";

import "./Form.css"

const Form = (props) => {
    const { handlerSetState, handlerShowData, reset, errors} = props;
    
    return (
        <div className="bg-info p-5 mt-5 formWrapper">
            <form className="bg-light p-5 mt-5 rounded text-center">
                <div className="container">
                    <h1 className="text-center text-secondary rounded mb-5">Login</h1>
                    <input className="form-control m-2" type="text" placeholder="username" name="username" onChange={handlerSetState} required/>
                    <span>{errors["username"]}</span>
                    <input className="form-control m-2" type="password" placeholder="password" name="password" onChange={handlerSetState} required/>
                    <span>{errors["password"]}</span>
                    <input className="form-control m-2 bg-info text-light" type="submit" value="login" onClick={handlerShowData} />
                    <button className="btn ms-3" onClick={reset}>reset</button>
                </div>
            </form>
        </div>
    )

}

export default Form;