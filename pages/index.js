import Link from 'next/link'

import Layout from '../components/Layout'


export default function Home( ) {
  return (
    <Layout>                  
      <div className="mx-auto" style={{maxWidth:'450px'}}>
      <blockquote className="blockquote">
        <p >I am just a lifelong learner. You can find on this site some information about  
        my <Link href="/experiences"><a>experience</a></Link>, <Link href="/education"><a>education</a></Link>, <Link href="/courses"><a>courses</a></Link> and <Link href="/skills"><a>skills</a></Link>.  
        </p>
        <p>Maybe my <Link href="/dictionary/categories"><a>dictionary</a></Link> can be useful for you.</p>
        
        </blockquote>
      </div>      
    </Layout>
  )
}
