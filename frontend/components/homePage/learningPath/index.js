import React from 'react'
import PathStep from './pathCard'
import frontend from '@/assets/images/frontend.png'
import backend from '@/assets/images/backend.png'
import mobil from '@/assets/images/mobil.png'
import game from '@/assets/images/game.png'

function LearningPath() {
    return (
        <div>
            <div className='container py-16'>
                <div className='flex items-center flex-col md:py-10 px-10 md:px-0 pb-6'>
                    <div className='md:w-1/3 w-full pb-6'><p className='text-4xl font-bold'>Why An Scholercity Out Of The Ordinary</p></div>

                    <p className='text-slate-600'>You dont have to struggle alone, youve got our assistance and help.</p>
                </div>
                <div className=' flex justify-between md:flex-row flex-col items-center gap-3'>
                    <PathStep 
                            image={frontend} 
                            title="Front-End Development" 
                            content="Front-End Developer olmaq üçün bilməli olduğunuz proqramlaşdırma dilləri"
                            color="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"/>
                    <PathStep 
                            image={backend} 
                            title="Back-End Development" 
                            content="Front-End Developer olmaq üçün bilməli olduğunuz proqramlaşdırma dilləri"
                            color="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"/>
                    <PathStep 
                            image={mobil} 
                            title="Mobil Development" 
                            content="Front-End Developer olmaq üçün bilməli olduğunuz proqramlaşdırma dilləri"
                            color="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"/>
                    <PathStep 
                            image={game} 
                            title="Game Development" 
                            content="Front-End Developer olmaq üçün bilməli olduğunuz proqramlaşdırma dilləri"
                            color="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"/>
                </div>
            </div>
        </div>
    )
}

export default LearningPath