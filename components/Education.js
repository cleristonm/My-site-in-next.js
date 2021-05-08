import { faCalendarWeek, faCaretDown, faCaretUp, faSchool, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useState } from 'react';


import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


function Education(props) {   
  const [isOpened, setIsOpened] = useState(true);

  const toogleStatus = useCallback( ()=> {
      setIsOpened(!isOpened);
  }, []);
  
  return (
      <div className="d-flex justify-content-center">      
        <div className="card col-sm-12 col-md-10 col-lg-8 mb-2 gx-0 bg-light" key={`accordion_${props.data.key}`}>
          <div className="card-body text-left">               
            <FontAwesomeIcon icon={faStickyNote} /> <span className="fw-bold">{props.data.field_of_study}</span> - {props.data.degree}<br/>
            <FontAwesomeIcon icon={faCalendarWeek} /> {props.data.start_year} - {props.data.end_year}<br/>
            <FontAwesomeIcon icon={faSchool} /> {props.data.school}            
          </div>
        </div>
      </div>
    )  
};


export default Education;
