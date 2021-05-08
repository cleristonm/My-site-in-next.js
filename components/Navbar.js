import Link from 'next/link';
import React from 'react';
import NavbarItem from './NavbarItem';

function Navbar(props) {    
    return ( 
        <>       
        <ul className="nav justify-content-center">            
            <li className="nav-item">
                <Link href="/">
                    <a className="nav-link">Home</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/blog">
                    <a className="nav-link">Blog</a>
                </Link>
            </li>
        </ul>
        <ul className="nav justify-content-center">            
            <NavbarItem itemActive={props.page ==='experiences'} text="Experience" link="/experiences"/>
            <NavbarItem itemActive={props.page ==='education'} text="Education" link="/education"/>
            <NavbarItem itemActive={props.page ==='courses'} text="Courses" link="/courses"/>
            <NavbarItem itemActive={props.page ==='skills'} text="Skills" link="/skills"/>            
        </ul>
        </>
        
    );
}

export default Navbar;