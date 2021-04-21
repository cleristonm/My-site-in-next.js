import Layout from '../components/layout'
import {firebaseDatabase} from '../lib/firebaseUtils'
import Navbar from '../components/Navbar';
import Education from '../components/Education';
import { dynamicSort } from '../lib/util';


export default function Home( {education} ) {
  return (
    <Layout>      
        <Navbar page="education"/>
        {education.map( (edu, index) => (
            <Education data={edu} key={index}/>            
        ))} 
    </Layout>
  )
}

export const getStaticProps = async () => {
  let education = [];
  await firebaseDatabase.ref("education").get().then(
    snapshop => {
      if (snapshop.exists()){
        snapshop.forEach(function (doc) {          
          education.push({
            key: doc.key,
            school: doc.val().school,
            field_of_study: doc.val().field_of_study,
            degree: doc.val().degree,
            start_year: doc.val().start_year,
            end_year: doc.val().end_year,            
          })
        })
      }
    }
  ).catch( error => {
    console.error(error);
  })
  
  education.sort(dynamicSort("-end_year"));
  
  return {
    props:{
      education,
    }
  }

}