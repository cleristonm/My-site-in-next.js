import React, { Component, Fragment } from "react";

function Footer() {  
    return (
        <footer style={{ position: "absolute", bottom: 0, width:"100%" }} className="bg-light">
        <div className="container mx-auto my-2 text-muted">
            <small>Last deploy: {(new Date()).toString()}</small>
        </div>
        </footer>
    );  
}

export default Footer;