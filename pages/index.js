import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/layout'
import {firebaseDatabase} from '../lib/firebaseUtils'
import Experience from '../components/experience';


export default function Home( {experiences} ) {
  return (
    <Layout>
      <Head>
        <title>Clériston Martinelo's site</title>
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
            <Experience data={xp} key={index}/>            
          ))}                 
          </div>                
      </div>
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
            description: doc.val().description,
            location: doc.val().location,
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