import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='relative flex justify-center items-center'>
            <Image
                className='mt-10 rounded-xl'
                src="/monkey.jpg"
                width={1200}
                height={700}
                alt="Hero Image"
            />

            <h1 className='absolute right-0 lg:mr-20 md:mr-16 mb-16 text-right text-white sm:text-3xl md:text-5xl lg:text-6xl' style={{ top: '50%' }} >
                Observing Wildlife,<br /> Understanding Roles.
            </h1>

        </div>
    )
}

export default Hero
