import { faCalendarWeek, faSchool, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useState } from 'react';


import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { formatIsoStringDate } from '../lib/util';

config.autoAddCss = false; /* eslint-disable import/first */


function Course(props) {   
  const [isOpened, setIsOpened] = useState(true);

  const toogleStatus = useCallback( ()=> {
      setIsOpened(!isOpened);
  }, []);
  
  return (        
        <div className="g-2">
          <div className="card h-100 col mb-2 bg-light" key={`accordion_${props.data.key}`}>
            <div className="card-body text-left">               
              <FontAwesomeIcon icon={faStickyNote} /> <span className="fw-bold">{props.data.name}</span><br/>
              <FontAwesomeIcon icon={faSchool} /> {props.data.organization}<br/>                        
              <FontAwesomeIcon icon={faCalendarWeek} /> {formatIsoStringDate(props.data.issue_date)}
            </div>
          </div>
        </div>      
    )  
};


export default Course;
