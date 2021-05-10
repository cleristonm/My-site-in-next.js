import { useRouter } from 'next/router'
import {firebaseDatabase} from '../../../lib/firebaseUtils'

import {BR, GB, FR} from '../../../components/Flags'
import Layout2Columns from '../../../components/Layout2Columns'

export default function Term( {terms, category} ) {  
  return (
    <Layout2Columns>               
      <h1>{category}</h1>
      <div className="container">        
        <div className="row ">        
        <div className="col-lg-10 col-md-12">
          {terms.map( (term, index) => (
            <div class="">            
              <div class="shadow rounded mb-3 ps-3 py-2 bg-light">
                {term.en != "" &&
                  <blockquote class="blockquote mb-0">
                    <p><GB/> {term.en}</p>
                    {term.phrase_en != "" && <footer class="blockquote-footer">{term.phrase_en}</footer>}
                  </blockquote>
                }
                {term.fr != "" &&
                  <blockquote class="blockquote mb-0">
                    <p><FR/> {term.fr}</p>
                    {term.phrase_fr != "" && <footer class="blockquote-footer">{term.phrase_fr}</footer>}
                  </blockquote>
                }
                {term.pt_br != "" &&
                  <blockquote class="blockquote mb-0">
                    <p><BR/> {term.pt_br}</p>
                    {term.phrase_pt_br != "" && <footer class="blockquote-footer">{term.phrase_pt_br}</footer>}
                  </blockquote>
                }
              </div>
            </div>
          ))}
          </div>
        </div>          
        </div>           
    </Layout2Columns>
  )
}

export async function getStaticProps(context) {
  let terms = [];
  await firebaseDatabase.ref().
    child("dictionary_terms").
    child(context.params.cid).get().then(
      snapshop => {
        if (snapshop.exists()){
          snapshop.forEach(function (doc) {              
            terms.push({
              key: doc.key,
              en: doc.val().en,
              phrase_en: doc.val().phrase_en,
              fr: doc.val().fr,
              phrase_fr: doc.val().phrase_fr,
              pt_br: doc.val().pt_br,
              phrase_pt_br: doc.val().phrase_pt_br,
            })
          })
        }
      }
  ).catch( error => {
    console.error(error);
  })

  let category = "";  
  await firebaseDatabase.ref().
    child("dictionary_categories").
    child(context.params.cid).get().then(
      snapshop => {
        if (snapshop.exists()){          
          category = snapshop.val().en+" / "+
                     snapshop.val().fr+" / "+
                    snapshop.val().pt_br;
        }   
      }
  ).catch( error => {
    console.error(error);
  })

  return {
    props: { terms, category }, 
    revalidate: 10
  }  
}

export async function getStaticPaths() {
  let paths = [];
  await firebaseDatabase.ref().child("dictionary_categories").get().then(
    snapshop => {
      if (snapshop.exists()){
        snapshop.forEach(function (doc) {          
          paths.push( { params: { cid: doc.key }})
        })
      }
    }
  ).catch( error => {
    console.error(error);
  })
  
  return {
    paths,
    fallback: false
  };
}

