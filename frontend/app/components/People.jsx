import Image from 'next/image'
import React from 'react'

const People = ({ imagepath, name, description }) => {
    return (
        <div>

            <Image
                src={imagepath}
                width={400}
                height={400}
                alt='person-image'
                className='rounded-full p-2'
            />

            <h1 className='text-2xl font-bold'>{name}</h1>
            <p>{description}</p>

        </div>
    )
}

export default People
