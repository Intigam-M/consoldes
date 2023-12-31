import React from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { pathContent } from '@/utils/static'

async function LearningPath({ params }) {
    const data = await pathContent(params.lang);
    const path = data[params.learningpath]
    return (
        <div className='md:container md:mx-auto'>
            <div className='my-8'>
                <p className='text-center mt-7 mb-2 text-pink-700 text-base font-medium uppercase '>Learning Paths</p>

                <h1 className='text-center text-pink-700 mb-6 text-5xl font-extrabold'>{path?.mainTitle}</h1>
                <p className='text-center text-pink-700 mt-7 mb-2 text-xl font-medium  '>{path?.secondTitle}</p>
                <div className='mt-8 text-pink-900 mb-12 text-lg w-2/3'>{path?.mainContent}</div>
            </div>


            {path.sections && path.sections.map((item, index) => {
                return (
                    <section key={index} className='w-2/3'>
                        <h2 className='mb-5 text-pink-700 text-2xl font-bold'>{item.title}</h2>
                        <p className='text-lg text-pink-900 mb-12'>{item.content}</p>
                        {item.course &&
                            <div>
                                <div className='flex items-center gap-3 mt-5 mb-2'>
                                    <BsCircleFill className='text-pink-600' />
                                    <h3 className='text-xl text-pink-700 font-bold'>{item.course}</h3>
                                </div>
                                <p className='ml-7 mb-6 text-pink-700'>{item.level}</p>
                            </div>
                        }

                    </section>
                )
            })
            }



        </div>
    )
}

export default LearningPath