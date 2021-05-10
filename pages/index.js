import Link from 'next/link'

import Layout from '../components/Layout'


export default function Home( ) {
  return (
    <Layout>                  
      <div className="mx-auto" style={{maxWidth:'450px'}}>
      <blockquote className="blockquote">
        <p >I am just a lifelong learner. On this site you'll some information about  
            my <Link href="/experiences"><a>experience</a></Link>, 
            <Link href="/education"><a>education</a></Link>, 
            <Link href="/skills"><a>skills</a></Link> and
            <Link href="/courses"><a>courses</a></Link> I've taken.  
        </p>
        <p>You might find my <Link href="/dictionary/categories"><a>dictionary</a></Link> useful.</p>
        
        </blockquote>
      </div>      
    </Layout>
  )
}
