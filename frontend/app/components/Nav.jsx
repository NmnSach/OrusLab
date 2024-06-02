import React from 'react'

const Nav = () => {
    return (
        <div className='flex justify-between items-center border-b-[1px] border-gray-200 py-4 shadow-md'>

            <div className='ml-10 font-bold text-2xl cursor-pointer'>
                Orus Ilyas Lab
            </div>

            <div className='mr-10'>
                <span className='mx-3 text-md cursor-pointer'>About</span>
                <span className='mx-3 text-md cursor-pointer'>People</span>
                <span className='mx-3 text-md cursor-pointer'>Academic Work</span>
                <span className='bg-black text-white rounded-lg hover:bg-white hover:text-black p-2 border-2 border-black mx-3 cursor-pointer'>Contact</span>
            </div>

        </div>
    )
}

export default Nav
