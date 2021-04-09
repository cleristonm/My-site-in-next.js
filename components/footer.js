import React, { Component, Fragment } from "react";

function Footer({dateTimeDeploy}) {  
    return (
        <footer style={{ position: "absolute", bottom: 0, width:"100%" }} className="bg-light">
        <div className="container mx-auto my-2 text-muted">
            <small>Last deploy: {dateTimeDeploy}</small>
        </div>
        </footer>
    );  
}

export async function getStaticProps(context) {
    const dateTimeDeploy = (new Date()).toString();
    console.log(dateTimeDeploy);
    return {
      props:{
        dateTimeDeploy,
      }
    }
  
}

export default Footer;