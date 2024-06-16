import React from 'react'
import CurrentProjects from '../components/CurrentProjects'
import CompletedProjects from '../components/CompletedProjects'


const Research = () => {
    return (
        <div className='mt-20'>
            <CurrentProjects />

            <CompletedProjects />
        </div>
    )
}

export default Research
