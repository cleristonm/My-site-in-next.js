import {firebaseDatabase} from '../../lib/firebaseUtils'
import Link from 'next/link';

import Layout2Columns from '../../components/Layout2Columns'
import { dynamicSort } from '../../lib/util';
import {BR, GB, FR} from '../../components/Flags'

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export default function Categories( {categories} ) {
  return (
    <>
    <Layout2Columns>              
      <h1 className="text-center">Dictionary / Dictionnaire / Dicionario</h1>
      <p className="ms-3"><GB/> I made this dictionary to help me in my day to day.
         I hope it can be helpful for you too. 
         For now, I just use English, French and Portuguese. 
         The sentences are focused on Quebec 
         French and Brazilian Portuguese (my mother tongue)</p>
      <p className="ms-3"><FR/>  J'ai fait ce dictionnaire pour m'aider dans mon quotidien. 
      J'espère que vous le trouverez utile aussi. 
      Pour l'instant, je utilise l'anglais, le français et le portugais. 
      Les phrases sont axées sur le français québécois et le portugais brésilien (ma langue maternelle) </p>
      <p className="ms-3"><BR/> Eu fiz este dicionário para me ajudar no
        meu dia a dia. Espero que possa ser útil para você 
        também. Por enquanto, estou usando inglês, francês e português. 
        As frases estão focadas no francês quebequense e português brasileiro (minha língua materna)</p>
        
      <h2 className="text-center pt-4">Categories / Catégories / Categorias</h2>
      
      <div className="container">
        <div className="row">
          {categories.map( (cat, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 my-2" key={cat.key}>
              <Link href={`/dictionary/terms/${cat.key}`}>
                <a>{cat.en} / {cat.fr} / {cat.pt_br}</a>
              </Link>
            </div>
          ))} 
          </div>
        </div>  
        
    </Layout2Columns>
      
      </>
    
  )
}

export const getStaticProps = async () => {
  let categories = [];
  await firebaseDatabase.ref().child("dictionary_categories").get().then(
    snapshop => {
      if (snapshop.exists()){
        snapshop.forEach(function (doc) {          
          categories.push({
            key: doc.key,
            en: doc.val().en,
            pt_br: doc.val().pt_br,
            fr: doc.val().fr,            
          })
        })
      }
    }
  ).catch( error => {
    console.error(error);
  })
  categories.sort(dynamicSort("en"));
  return {
    props:{
      categories,
    }
  }
}