import Layout from '../components/Layout'
import {firebaseDatabase} from '../lib/firebaseUtils'
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';

export default function SkillsPage( {skills} ) {
  return (
    <Layout>      
        <Navbar page="skills"/>
        <div className="container">
          <div class="row justify-content-md-center mt-3">
            <div class="col col-lg-8 col-md-12">
              <Skills skills={skills}/>        
            </div>
          </div>          
        </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  let skills = "";
  await firebaseDatabase.ref().child("skills").get().then(
    snapshop => {
      if (snapshop.exists()){        
        snapshop.forEach(function (doc) {          
          skills = doc.val();          
        })
      }
    }
  ).catch( error => {
    console.error(error);
  })

  console.log(skills);

  return {
    props:{
      skills,
    }
  }
}