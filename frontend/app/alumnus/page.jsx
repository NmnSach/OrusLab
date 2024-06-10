import React from 'react'
import People from '../components/People'

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-24'>
            <div>
                <h1 className='text-2xl sm:text-4xl font-bold my-5 underline decoration-yellow-400'>Meet our Alumni</h1>
            </div>

            <div className='w-10/12'>
                <People
                    imagepath="/prof.jpg"
                    name="Shaheer Khan"
                    description="I completed my PhD on the movement ecology of Indian wolves in a 
                    human dominated landscape. My primary interests lie in large carnivore ecology, 
                    movement ecology, urban wildlife, and the impact of linear infrastructure on wildlife 
                    ecology."
                />
            </div>
        </div>
    )
}

export default page
