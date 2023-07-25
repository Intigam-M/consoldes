import Link from 'next/link'
import React from 'react'

function post() {
    return (
        <Link href='blog/blog-detail'>
        <div className='bg-green-300 h-[450px] rounded shadow-lg flex flex-col mb-6'>
            <div className='bg-red-300 h-2/4'>Image here</div>
            <div className='p-6'>
                <p className='bg-sky-200 inline text-sky-800'>Categoria name</p>
                <p className='mt-6 text-lg font-bold hover:text-blue-600 cursor-pointer'>The Challenge Of Global Learning In Public Education.</p>
                <div className='flex justify-between  pt-9 text-sm'>
                    <p>Author: Narmin Mammadli</p>
                    <p>23.07.2023</p>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default post