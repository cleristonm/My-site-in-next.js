import { faBuilding, faCalendarWeek, faCaretDown, faCaretUp, faMapMarkedAlt, faSearchPlus, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

class Experience extends Component {
  constructor(){
    super();

    this.state = {
        isOpened : false
    }

    this.toggle = this.toggle.bind(this);    
  }

  toggle() {
    this.setState((prevState) => ({
      isOpened : !prevState.isOpened
    }));
    console.log(this.state.isOpened);
  }

  render() {
    return (
      <Accordion key={`accordion_${this.props.data.key}`} className="col-sm-12 col-md-10 col-lg-8 mb-2 gx-0">
        <Card key={`accordion_${this.props.data.key}`} onClick={this.toggle}>
          
            <Accordion.Toggle as={Card.Header} eventKey={this.props.data.key} style={{fontSize: "1rem"}}>    
            <Container>
              <Row>
              <Col xs={11}>
                <FontAwesomeIcon icon={faCalendarWeek} /> {this.props.data.start_date} - {this.props.data.end_date} <FontAwesomeIcon icon={faUserTie} /> {this.props.data.title}<br/>
                <FontAwesomeIcon icon={faBuilding} /> {this.props.data.company} - <FontAwesomeIcon icon={faMapMarkedAlt} /> {this.props.data.location} 
              </Col>
              <Col xs={1}>
                <FontAwesomeIcon size="2x" icon={
                  (this.state.isOpened) ? faCaretUp : faCaretDown
                }/>
              </Col>
              </Row>
            </Container>  
            </Accordion.Toggle>

            <Accordion.Collapse eventKey={this.props.data.key}>
                <em>
                <Card.Body dangerouslySetInnerHTML={{ __html: this.props.data.description}}></Card.Body>
                </em>
            </Accordion.Collapse>
        </Card>                        
      </Accordion>
    )
  }
};

export default Experience;
