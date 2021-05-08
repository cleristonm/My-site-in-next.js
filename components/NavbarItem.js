import Link from 'next/link';
import React from 'react';

function NavbarItem(props) {    
    return (   
        <>
        { props.itemActive 
            ? 
            <li className="nav-item">
                <Link href="#">
                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">{props.text}</a>
                </Link>
            </li>
            :
            <li className="nav-item">
                <Link href={props.link}>
                    <a className="nav-link" href={props.link}>{props.text}</a>
                </Link>
            </li>

        }
        </>
    );
}

export default NavbarItem;