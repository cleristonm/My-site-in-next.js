import Head from "next/head";
import Footer from "./footer";

export default function Layout({ children }){
    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Personal site of Clériston Martinelo"/>                                
            <meta name="twitter:card" content="summary_large_image" />
        </Head>        
        <div className="container mt-5">
            {children}
        </div>
        <Footer/>
        </>
    )    
}

