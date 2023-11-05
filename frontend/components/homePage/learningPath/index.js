import React from 'react'
import PathStep from './pathCard'
import frontend from '@/assets/images/frontend.png'
import backend from '@/assets/images/backend.png'
import mobil from '@/assets/images/mobil.png'
import game from '@/assets/images/game.png'

function LearningPath({dictionary, currentLang}) {
    return (
        <div className='pb-20 pt-10'>
            <div className='container '>
                <div className='flex items-center flex-col md:py-10 px-10 md:px-0 pb-6'>
                    <div className='md:w-2/3 w-full pb-6'><p className='text-5xl text-[#761574] text-center font-bold'>{dictionary.title}</p></div>

                    <p className='text-[#761574] text-lg'>{dictionary.span}</p>
                </div>
                <div className=' flex justify-between md:flex-row flex-col items-center gap-3'>
                    <PathStep 
                            image={frontend} 
                            title="Front-End Development" 
                            slug="front_end_development"
                            content={dictionary.card.front_end}
                            currentLang={currentLang}
                            color="bg-gradient-to-r from-[#ed71ad]    to-[#f492f0]"/>
                       
                    <PathStep 
                            image={backend} 
                            title="Back-End Development" 
                            slug="back_end_development"
                            content={dictionary.card.back_end}
                            currentLang={currentLang}
                            color="bg-gradient-to-r from-[#f492f0]  to-fuchsia-500"/>
                    <PathStep 
                            image={mobil} 
                            title="Mobil Development" 
                            slug="mobil_development"
                            content={dictionary.card.mobile}
                            currentLang={currentLang}
                            color="bg-gradient-to-r from-fuchsia-500  to-[#b84fce]"/>
                    <PathStep 
                            image={game} 
                            title="Game Development" 
                            slug="game_development"
                            content={dictionary.card.game}
                            currentLang={currentLang}
                            color="bg-gradient-to-r from-[#b84fce] to-[#761574]"/>
                </div>
            </div>
        </div>
    )
}

export default LearningPath