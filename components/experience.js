import React from 'react';
import { Accordion, Card } from "react-bootstrap";

const Experience = (props) => (
  <Accordion key={`accordion_${props.data.key}`} className="col-sm-12 col-md-10 col-lg-8 mb-2 gx-0">
    <Card key={`accordion_${props.data.key}`}>
        <Accordion.Toggle as={Card.Header} eventKey={props.data.key}>
        {props.data.start_date} - {props.data.end_date} - {props.data.title}<br/>
        {props.data.company} - {props.data.location}
        </Accordion.Toggle>

        <Accordion.Collapse eventKey={props.data.key}>
            <em>
            <Card.Body dangerouslySetInnerHTML={{ __html: props.data.description}}></Card.Body>
            </em>
        </Accordion.Collapse>
    </Card>                        
  </Accordion>
);

export default Experience;
