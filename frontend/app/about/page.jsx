import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <>
            <div className='flex flex-col sm:flex-row justify-center items-center sm:mt-20 sm:mx-20'>

                <div className='w-2/5 flex justify-center items-center mt-5 sm:mt-0'>
                    <Image
                        className='rounded-full'
                        src="/prof.jpg"
                        width={400}
                        height={400}
                        alt="Hero Image"
                    />
                </div>


                <div className='w-3/5 sm:pl-20'>
                    <h2 className=' text-2xl sm:text-5xl font-bold my-5 underline decoration-yellow-400'>About</h2>
                    <p className='text-[#828282] my-2 text-sm sm:text-lg w-full'>
                        I am a <mark className='bg-yellow-200'>Professor in Biodiversity and Environmental Studies</mark> at the Department of Wildlife Sciences,
                        Aligarh Muslim University. I have over <mark className='bg-green-200'>20 years </mark> of experience in field research on mammals,
                        with a particular focus on ungulates in the high-altitude Himalayas. My work includes the
                        conservation of species like the Musk Deer and Himalayan Tahr.
                    </p>

                    <p className='text-[#828282] my-2 text-sm sm:text-lg w-full'>
                        I have served as the "Asia Coordinator" of the Deer Specialist Group of SSC/IUCN.
                        I have also authored four books, including one published by Routledge-Taylor and Francis.
                        My research interests include Mammalian Ecology, biodiversity conservation, conservation
                        genetics, population ecology, herbivore ecology, wildlife policy, quantitative ecology,
                        and human-animal conflict.
                    </p>

                </div>

            </div>
        </>

    )
}

export default About
