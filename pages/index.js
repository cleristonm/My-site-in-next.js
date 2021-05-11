import Link from 'next/link'

import Layout from '../components/Layout'


export default function Home( ) {
  return (
    <Layout>                  
      <div className="mx-auto" style={{maxWidth:'450px'}}>
      <blockquote className="blockquote">
        <p >I am just a lifelong learner. On this site you'll some information about&nbsp; 
            my <Link href="/experiences"><a>experience</a></Link>,&nbsp;
            <Link href="/education"><a>education</a></Link>,&nbsp; 
            <Link href="/skills"><a>skills</a></Link> and <Link href="/courses"><a>courses</a></Link> I've taken.  
        </p>
        <p>You might find my <Link href="/dictionary/"><a>dictionary</a></Link> useful.</p>
        
        </blockquote>
      </div>      
    </Layout>
  )
}
