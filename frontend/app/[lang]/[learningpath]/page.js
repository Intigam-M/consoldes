import React from 'react'
import {BsCircleFill} from 'react-icons/bs'
import {pathContent} from '@/utils/static'

function LearningPath({params}) {
  const path = pathContent[params.learningpath]
  return (
    <div className='md:container md:mx-auto'>
      <div className='my-8'>
        <p className='text-center mt-7 mb-2 text-sm font-medium uppercase '>Learning Paths</p>
        
        <h1 className='text-center  mb-6 text-5xl font-extrabold'>{path?.mainTitle}</h1>
        <p className='text-center mt-7 mb-2 text-xl font-medium  '>{path?.secondTitle}</p>
        <div className='mt-8 mb-12 text-lg w-2/3'>{path?.mainContent}</div>
      </div>

      
      {path.sections && path.sections.map((item,index)=> {        
        return (
        <section className='w-2/3'>
          <h2 className='mb-5 text-2xl font-bold'>{item.title}</h2>
          <p className='text-lg mb-12'>{item.content}</p> 
        {item.course &&
          <div>
          <div className='flex items-center gap-3 mt-5 mb-2'>
            <BsCircleFill className='text-red-400'/>         
            <h3 className='text-xl font-bold'>{item.course}</h3>  
          </div>                 
            <p className='ml-7 mb-6'>{item.level}</p>
        </div>
        }
       
      </section>
      )})
    }
      
        
      
    </div>
  )
}

export default LearningPath