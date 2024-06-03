import React from 'react'
import Link from 'next/link'


const Nav = () => {
    return (
        <div className='flex justify-between items-center border-b-[1px] border-gray-200 py-4 shadow-md'>

            <div className='ml-10 font-bold text-2xl cursor-pointer'>
                Orus Ilyas Lab
            </div>

            <div className='mr-10'>
                <Link href="/about"><span className='mx-3 text-md cursor-pointer'>About</span></Link>
                <Link href="/people"><span className='mx-3 text-md cursor-pointer'>People</span></Link>
                <Link href="/research"><span className='mx-3 text-md cursor-pointer'>Academic Work</span></Link>
                <Link href="/contactus"><span className='bg-black text-white rounded-lg hover:bg-white hover:text-black p-2 border-2 border-black mx-3 cursor-pointer'>Contact</span></Link>
            </div>

        </div>
    )
}

export default Nav
