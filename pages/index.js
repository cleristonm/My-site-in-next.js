import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from 'react-bootstrap'

import Layout from '../components/layout'


export default function Home( {experiences} ) {
  return (
    <Layout>      
      <Link href="/experiences"><a>Experiences</a></Link>          
    </Layout>
  )
}

export const getStaticProps = async () => {  
  return {
    props:{
      
    }
  }

}