import React from 'react'

function CourseInfo() {
    return (
        <div className='px-5 flex flex-col gap-5'>
            <div className='border rounded h-44'>Image here</div>
            <div>
                <b className='font-medium inline'>Instructor: </b> 
                <span className='text-slate-500'>Eleanor Fant</span>
            </div>
            <div>
                <b className='font-medium inline'>Lectures: </b>
                <span className='text-slate-500'>14</span>
            </div>
            <div>
                <b className='font-medium inline'>Price: </b>
                <span className='text-slate-500'>100$</span>
            </div>
        </div>
    )
}

export default CourseInfo