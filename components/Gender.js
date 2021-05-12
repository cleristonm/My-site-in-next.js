import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


export default function Gender(props){
    return (
        <>
        {props.gender == "m" && <FontAwesomeIcon title="Masculine / Masculin / Masculino" icon={faVenus}/>}
        {props.gender == "f" && <FontAwesomeIcon title="Feminine / Féminin / Feminino" icon={faMars}/>}
        </>
    )
}