import Layout from '../components/layout'
import {firebaseDatabase} from '../lib/firebaseUtils'
import Navbar from '../components/Navbar';
import Course from '../components/Course';
import { dynamicSort } from '../lib/util';


export default function Home( {courses} ) {
  return (
    <Layout>      
        <Navbar page="courses"/>
        <div className="container px-lg-5 px-sm-0">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-eq-height">
            {courses.map( (course, index) => (          
                <Course data={course} key={index}/>            
            ))} 
          </div>
        </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  let courses = [];
  await firebaseDatabase.ref().child("courses").get().then(
    snapshop => {
      if (snapshop.exists()){
        snapshop.forEach(function (doc) {          
          courses.push({
            key: doc.key,
            name: doc.val().name,
            organization: doc.val().organization,
            issue_date: doc.val().issue_date      
          })
        })
      }
    }
  ).catch( error => {
    console.error(error);
  })
  courses.sort(dynamicSort("-issue_date"));
  return {
    props:{
      courses,
    }
  }

}