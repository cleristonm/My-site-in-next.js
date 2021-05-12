import React from 'react'
import Image from 'next/image'

export default function Badge(props){
    return (
        <div className="text-center">
            <Image 
                priority
                src="/images/profile.jpeg"
                className="rounded-circle"
                height={144}
                width={144}
                alt="My photo profile"
            />
            
            <h1 className="h1 fw-bold">Cleriston Martinelo</h1>
            {props.showTitle == "true" && <p className="lead mb-4">Software Developer</p>}
        </div>

    )
}