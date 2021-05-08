import React from 'react'

function Skills(props) {    
    const skillArray = props.skills.split(",");
    return (   
        <>
        <div>
            {skillArray.map( (skill) => (
                <div class="btn btn-info btn-sm m-1" style={{cursor: "default"}}>{skill}</div>            
            ))}
        </div>
        </>
    );
}

export default Skills;