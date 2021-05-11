import { faBlog, faHome, faSpellCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';



function MenuDictonary(props) {    
    return ( 
        <>  
        <Navbar bg="light" expand="md">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="mr-auto my-2 my-lg-0 flex-column"            
            navbarScroll
            >
                <Nav.Link href="/">
                    <Link href="/">
                        <a><FontAwesomeIcon icon={faHome}/> Home</a>
                    </Link>
                </Nav.Link>
                <Nav.Link href="/blog">
                    <Link href="/blog">
                        <a><FontAwesomeIcon icon={faBlog}/> Blog</a>
                    </Link>                
                </Nav.Link>      
                <Nav.Link href="/dictionary">
                    <Link href="/dictionary">
                        <a><FontAwesomeIcon icon={faSpellCheck}/> Dictionary</a>
                    </Link>                
                </Nav.Link>      

            </Nav>    
        </Navbar.Collapse>
        </Navbar>

        {/* <nav className="navbar bg-light">                    
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
            
        </nav>      */}
        </>       
    );
}

export default MenuDictonary;