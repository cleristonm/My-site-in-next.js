import { faBuilding, faCalendarWeek, faCaretDown, faCaretUp, faMapMarkedAlt, faSearchPlus, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useState } from 'react';
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


function Experience(props) {   
  const [isOpened, setIsOpened] = useState(true);

  const toogleStatus = useCallback( ()=> {
      setIsOpened(!isOpened);
  }, []);
  
  return (
      <Accordion key={`accordion_${props.data.key}`} className="col-sm-12 col-md-10 col-lg-8 mb-2 gx-0">
        <Card key={`accordion_${props.data.key}`} onClick={toogleStatus}>
          
            <Accordion.Toggle as={Card.Header} eventKey={props.data.key} style={{fontSize: "1rem"}}>    
            <Container>
              <Row>
              <Col xs={11}>
                <FontAwesomeIcon icon={faCalendarWeek} /> {props.data.start_date} - {props.data.end_date} <FontAwesomeIcon icon={faUserTie} /> {props.data.title}<br/>
                <FontAwesomeIcon icon={faBuilding} /> {props.data.company} - <FontAwesomeIcon icon={faMapMarkedAlt} /> {props.data.location} 
              </Col>
              <Col xs={1}>
                <FontAwesomeIcon size="2x" icon={
                  (isOpened) ? faCaretUp : faCaretDown
                }/>
              </Col>
              </Row>
            </Container>  
            </Accordion.Toggle>

            <Accordion.Collapse eventKey={props.data.key}>
                <em>
                <Card.Body dangerouslySetInnerHTML={{ __html: props.data.description}}></Card.Body>
                </em>
            </Accordion.Collapse>
        </Card>                        
      </Accordion>
    )  
};


export default Experience;
