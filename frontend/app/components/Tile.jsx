import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Tile = ({ imagepath, title, description, link }) => {
    return (
        <div className='py-[32px] px-[18px] mx-5 border-transparent shadow-xl' style={{ width: '500px', height: '500px' }}>
            <Image
                className='rounded-xl'
                src={imagepath}
                width={600}
                height={400}
                alt="Team Image"
                style={{ objectFit: 'cover', width: '100%', height: '250px' }}
            />
            <h1 className='font-bold lg:text-2xl md:text-xl sm:text-md mt-4'>{title}</h1>
            <p className='lg:text-lg md:text-md sm:text-sm text-[#828282] overflow-hidden text-ellipsis mt-4' style={{ height: '100px' }}>{description}</p>
            {link && <Link className='underline mt-4' href={link}>Know More</Link>}
        </div>
    )
}

export default Tile
