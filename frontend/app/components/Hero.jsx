import React from 'react'
import Image from 'next/image'
import Tile from './Tile'

const Hero = () => {
    return (
        <>
            <div className='mx-10 sm:mx-20 relative flex justify-center items-center'>
                <Image
                    className='mt-10 rounded-xl'
                    src="/deer3.jpg"
                    width={1200}
                    height={700}
                    alt="Hero Image"
                />

                <div className='absolute inset-0 flex items-end justify-end p-5'>
                    <h1 className='text-lg font-bold sm:text-6xl text-right text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]'>
                        Observing Wildlife,<br /> Understanding Roles
                    </h1>
                </div>
            </div>

            <div className='lg:m-20 md:m-10 sm:m-6'>

                <h1 className='lg:text-4xl p-3 md:text-3xl sm:text-xl text-black font-bold border-b-2 border-yellow-400 w-72 '>About the Lab</h1>
                <p className='text-[#828282] p-3 lg:text-xl md:text-lg sm:text-md mt-6'>Our lab focuses on the conservation and population ecology of mammals and birds, specializing in the study of ungulates in central Indian landscapes, medium and high-altitude areas, as well as other large herbivores.
                    We are dedicated to understanding the complex interactions between wildlife and human communities, exploring the socio-economic dynamics that impact conservation efforts. Microhistology plays a key role in our research, providing detailed insights into the dietary patterns and ecological interactions of various species.
                </p>

                <p className='text-[#828282] p-3 lg:text-xl md:text-lg sm:text-md mt-6'>In addition to our work with large herbivores, we study avian ecology and behavior, investigating the intricate dynamics of bird populations and their environments. Our lab fosters a collaborative and inclusive research environment, encouraging innovative and diverse ecological studies.
                </p>

            </div>

            {/* <div className='flex flex-col p-10  sm:p-2 justify-center items-center lg:mx-10 md:mx-8 sm:mx-6'>
                <div>
                    <Image
                        className='rounded-xl px-4 my-2 sm:my-0'
                        src="/Team.png"
                        width={640}
                        height={610}
                        alt="Team Image"
                    />
                </div>

                <div>
                    <Image
                        className='rounded-xl px-4 my-2 sm:my-0'
                        src="/Team.png"
                        width={640}
                        height={610}
                        alt="Research Image"
                    />
                </div>

            </div> */}


            <h1 className='mx-20 w-72 my-10 lg:text-4xl md:text-3xl sm:text-xl text-black font-bold border-b-2 border-yellow-400'>Research Areas</h1>


            <div className='flex flex-col lg:flex-row justify-center items-center mx-20'>


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
