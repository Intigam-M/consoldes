import CourseInfo from '@/components/coursePage/courseInfo'
import CourseOverview from '@/components/coursePage/courseOverview'
import React from 'react'

function CourseDetailContainer() {
  return (
    <div>
        <div className='container flex mt-10'>
            <div className='bg-amber-600 w-8/12'>
                <CourseOverview />
            </div>
            <div className='bg-slate-300 w-4/12'>
                <CourseInfo />
            </div>
        </div>
    </div>
  )
}

export default CourseDetailContainer