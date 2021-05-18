import Head from "next/head";
import Badge from './Badge'
import MenuDictonary from "./MenuDictionary";

export default function Layout2Columns({ children }){
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
            <div className="container" key="main_container">
                <div className="row" key="main_row">
                    <div className="col-lg-2 col-md-3 col-sm-12">
                        <Badge showTitle="false"/>   
                        <MenuDictonary/>                        
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-12 pt-md-5">
                        {children}                                
                    </div>                
                </div>
            </div>   
            <footer className="py-3">
                
            </footer>      
        </>
    )    
}

