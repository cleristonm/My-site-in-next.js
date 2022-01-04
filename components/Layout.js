import Head from "next/head";
import Badge from './Badge'

export default function Layout({ children }){
    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Personal site of Clériston Martinelo"/>                                
            <meta name="twitter:card" content="summary_large_image" />            
            <title>Clériston Martinelo</title>
        </Head>                
        <div className="container mt-5 ">
            <Badge showTitle="true"/>               
            <div className="container-fluid">
                {children}            
            </div>       
                
        </div>        
        </>
    )    
}

