import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/layout'
import {firebaseDatabase} from '../lib/firebaseUtils'
import { Accordion, Card } from "react-bootstrap";


export default function Home( {experiences} ) {
  return (
    <Layout>
      <Head>
        <title>My personel website</title>
      </Head>      
      <div className="text-center">
        <Image 
            priority
            src="/images/profile.jpeg"
            className="rounded-circle"
            height={144}
            width={144}
            alt="My photo profile"
        />
        
        <h1 className="h1 fw-bold">Cleriston Martinelo</h1>
        <p className="lead mb-4">Software Developer</p>      
      </div>
      <div className="container">                      
      
        <div className="row justify-content-center">
          {experiences.map( (xp, index) => (
            <Accordion key={`accordion_${xp.key}`} className="col-sm-12 col-md-10 col-lg-8 mb-2 gx-0">
            <Card key={`accordion_${xp.key}`}>
                <Accordion.Toggle as={Card.Header} eventKey={xp.key}>
                {xp.start_date} - {xp.end_date} - {xp.company} <br/>{xp.title}  - {index}            
                </Accordion.Toggle>

                <Accordion.Collapse eventKey={xp.key}>
                    <Card.Body>{xp.description}</Card.Body>
                </Accordion.Collapse>
            </Card>                        
            </Accordion>
          ))}                 
          </div>          
      
      </div>
      
      {/* <Accordion>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                TAB 1
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
                <Card.Body>This is first tab body</Card.Body>
            </Accordion.Collapse>
        </Card>                        
    </Accordion>
     
      <div className="row justify-content-md-center">      
          <div className="col-sm-12 col-md-10 col-lg-8 accordion" id="accordionXP">        
          {experiences.map( (xp) => (
            <div className="accordion-item mb-2" key={xp.key}>
              <h2 className="accordion-header" id="heading{xp.key}">        
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{xp.key}" aria-expanded="false" aria-controls="collapse{xp.key}">
                {xp.start_date} - {xp.end_date} - {xp.company} <br/>{xp.title}              
                </button>              
              </h2>
              <div id="collapse{xp.key}" className="accordion-collapse collapse show" aria-labelledby="heading{xp.key}" data-bs-parent="#accordionXP">
                <div className="accordion-body">
                {xp.description}
                </div>
              </div>              
            </div>          
          ))}       
        </div> */}
      
    </Layout>
  )
}

export const getStaticProps = async () => {
  let experiences = [];
  await firebaseDatabase.ref().child("experiences").get().then(
    snapshop => {
      if (snapshop.exists()){
        snapshop.forEach(function (doc) {          
          experiences.push({
            key: doc.key,
            company: doc.val().company,
            title: doc.val().title,
            start_date: doc.val().start_date,
            end_date: doc.val().end_date,
            description: doc.val().description
          })
        })
      }
    }
  ).catch( error => {
    console.error(error);
  })
  
  return {
    props:{
      experiences,
    }
  }

}