import React from 'react'
import PathStep from './pathCard'

function LearningPath() {
    return (
        <div className='bg-sky-500'>
            <div className='container py-16'>
                <div className='flex items-center flex-col md:py-10 px-10 md:px-0 pb-6'>
                    <div className='md:w-1/3 w-full pb-6'><p className='text-4xl font-bold'>Why An Scholercity Out Of The Ordinary</p></div>

                    <p className='text-slate-600'>You dont have to struggle alone, youve got our assistance and help.</p>
                </div>
                <div className=' flex justify-between md:flex-row flex-col items-center gap-3'>
                    <PathStep />
                    <PathStep />
                    <PathStep />
                    <PathStep />
                </div>
            </div>
        </div>
    )
}

export default LearningPath