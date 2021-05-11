import { faBlog, faHome, faSpellCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

function MenuDictonary(props) {    
    return ( 
        <>  
        <nav class="navbar bg-light">
            <ul className="navbar-nav ps-3">            
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link"><FontAwesomeIcon icon={faHome}/> Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/blog">
                        <a className="nav-link"><FontAwesomeIcon icon={faBlog}/> Blog</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/dictionary/">
                        <a className="nav-link"><FontAwesomeIcon icon={faSpellCheck}/> Dictionary</a>
                    </Link>
                </li>
            </ul>        
        </nav>     
        </>       
    );
}

export default MenuDictonary;