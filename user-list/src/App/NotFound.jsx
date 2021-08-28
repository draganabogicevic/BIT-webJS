import React from "react";
import { Fragment } from "react";
import { Link } from 'react-router-dom'

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const NotFound = () => {
    return (
        <Fragment>
            <Header />
            <div>
                <h1>Page Not Found</h1>
                <Link to="/home">Return to home</Link>
            </div>
            <Footer />
        </Fragment>

    )
}

export default NotFound;