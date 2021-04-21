import Layout from '../components/layout'
import {firebaseDatabase} from '../lib/firebaseUtils'
import Experience from '../components/Experience';
import Navbar from '../components/Navbar';


export default function Experiences( {experiences} ) {
  return (
    <Layout>      
        <Navbar page="experiences"/>
        {experiences.map( (xp, index) => (
            <Experience data={xp} key={index}/>            
        ))} 
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