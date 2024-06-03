import React from 'react'
import Image from 'next/image'
import Tile from './Tile'

const Hero = () => {
    return (
        <>
            <div className='relative flex justify-center items-center'>
                <Image
                    className='mt-10 rounded-xl '
                    src="/monkey.png"
                    width={1200}
                    height={700}
                    alt="Hero Image"
                />

                {/* <h1 className='absolute right-0 lg:mr-20 md:mr-16 mb-16 text-right text-white sm:text-3xl md:text-5xl lg:text-6xl' style={{ top: '50%' }} >
                    Observing Wildlife,<br /> Understanding Roles.
                </h1> */}

            </div>

            <div className='lg:m-20 md:m-10 sm:m-6'>

                <h1 className='lg:text-4xl md:text-3xl sm:text-xl text-black font-semibold'>About the Lab</h1>
                <p className='text-[#828282] lg:text-xl md:text-lg sm:text-md mt-6'>Our lab focuses on the conservation and population ecology of mammals and birds, specializing in the study of ungulates in central Indian landscapes, medium and high-altitude areas, as well as other large herbivores.
                    We are dedicated to understanding the complex interactions between wildlife and human communities, exploring the socio-economic dynamics that impact conservation efforts. Microhistology plays a key role in our research, providing detailed insights into the dietary patterns and ecological interactions of various species.
                </p>

                <p className='text-[#828282] lg:text-xl md:text-lg sm:text-md mt-6'>In addition to our work with large herbivores, we study avian ecology and behavior, investigating the intricate dynamics of bird populations and their environments. Our lab fosters a collaborative and inclusive research environment, encouraging innovative and diverse ecological studies.
                </p>

            </div>

            <div className='flex justify-center items-center lg:mx-20 md:mx-10 sm:mx-6'>
                <div>
                    <Image
                        className='rounded-xl px-4'
                        src="/team.png"
                        width={640}
                        height={610}
                        alt="Team Image"
                    />
                </div>

                <div>
                    <Image
                        className='rounded-xl px-4'
                        src="/team.png"
                        width={640}
                        height={610}
                        alt="Research Image"
                    />
                </div>

            </div>

            <div className='flex justify-center items-center lg:m-20 md:m-10 sm:m-6'>
                <h1 className='lg:text-4xl md:text-3xl sm:text-xl text-black font-semibold underline'>Research Areas</h1>
            </div>

            <div className='flex justify-center items-center lg:mx-20 md:mx-10 sm:mx-6'>


                <Tile
                    imagepath="/Elephant.png"
                    title="Status and Conservation of Mammals"
                    description="Researching the population trends and conservation strategies for mammal species to ensure their survival."
                    link="/conservation"
                />

                <Tile
                    imagepath="/turtle.png"
                    title="Habitat Ecology and Niche Overlap"
                    description="Studying how different species share and compete for habitat resources to understand ecosystem dynamics."
                    link="/habitatEcology"
                />
            </div>

            <div className='flex justify-center items-center lg:mx-20 md:mx-10 sm:mx-6 mt-10'>


                <Tile
                    imagepath="/bird.png"
                    title="Feeding Ecology"
                    description=" Investigating the dietary habits and food sources of wildlife to uncover their roles in the ecosystem."
                    link="/feedingEcology"
                />

                <Tile
                    imagepath="/zebras.png"
                    title="Understanding Human Aspect in Conservation"
                    description="Examining the impact of human activities on wildlife and developing strategies to promote coexistence and conservation."
                    link="/humanAspect"
                />
            </div>
        </>
    )
}

export default Hero
