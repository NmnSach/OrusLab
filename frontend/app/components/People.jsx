import Image from 'next/image'
import React from 'react'

const People = ({ imagepath, name, description }) => {
    return (
        <div className='flex mt-5'>

            <Image
                src={imagepath}
                width={250}
                height={250}
                alt='person-image'
                className='rounded-full'
            />

            <div className='flex justify-center items-start flex-col ml-10'>

                <h1 className='text-2xl font-bold'>{name}</h1>
                <p>{description}</p>

            </div>

        </div>
    )
}

export default People
