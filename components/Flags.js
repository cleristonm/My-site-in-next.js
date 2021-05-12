import React from 'react'
import Image from 'next/image'

const SIZE = 15;

export function BR(){
    return (           
        <Image 
            priority
            src="/images/br.svg"                
            height={SIZE}                
            width={SIZE}
            alt="Portuguese / Portuguais / Português - Brazil / Brésil / Brasil "
        />        
    )
}

export function GB(){
    return (             
        <Image 
            priority
            src="/images/gb.svg"                
            height={SIZE}                
            width={SIZE}               
            alt="English / Anglais / Inglês"
        />        
    )
}


export function FR(){
    return (            
        <Image 
            priority
            src="/images/fr.svg"                
            height={SIZE}                
            width={SIZE}               
            alt="French / Français / Francês"
        />           
    )
}

