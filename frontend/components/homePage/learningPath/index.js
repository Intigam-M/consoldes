import React from 'react'
import PathStep from './pathCard'
import frontend from '@/assets/images/frontend.png'
import backend from '@/assets/images/backend.png'
import mobil from '@/assets/images/mobil.png'
import game from '@/assets/images/game.png'

function LearningPath() {
    return (
        <div className='pb-20 pt-10'>
            <div className='container '>
                <div className='flex items-center flex-col md:py-10 px-10 md:px-0 pb-6'>
                    <div className='md:w-2/3 w-full pb-6'><p className='text-5xl text-[#761574] text-center font-bold'>Learning Paths</p></div>

                    <p className='text-[#761574] text-lg'>Discover your optimal learning path to reach your full potential.</p>
                </div>
                <div className=' flex justify-between md:flex-row flex-col items-center gap-3'>
                    <PathStep 
                            image={frontend} 
                            title="Front-End Development" 
                            slug="front-end-development"
                            content="Front-end istifadəçinin gördüyü və qarşılıqlı əlaqədə olduğu proqram və ya ziyarət etdiyi Veb Saytdır."
                            color="bg-gradient-to-r from-[#ed71ad]    to-[#f492f0]"/>
                       
                    <PathStep 
                            image={backend} 
                            title="Back-End Development" 
                            slug="back-end-development"
                            content="Back-end istifadəçinin görmədiyi, veb saytın arxa üzü, məlumatların emal edildiyi və saxlandığı yerdir."
                            color="bg-gradient-to-r from-[#f492f0]  to-fuchsia-500"/>
                    <PathStep 
                            image={mobil} 
                            title="Mobil Development" 
                            slug="mobil-development"
                            content="Bu günlərdə mobil proqramlar yaratmaq üçün lazım olan tool-lar iki kateqoriyaya bölünür: native və cross-platfrom"
                            color="bg-gradient-to-r from-fuchsia-500  to-[#b84fce]"/>
                    <PathStep 
                            image={game} 
                            title="Game Development" 
                            slug="game-development"
                            content="Game Development dünya üzrə 3 milyarda yaxın oyunçu ilə ən sürətlə inkişaf edən sektorlardan biridir."
                            color="bg-gradient-to-r from-[#b84fce] to-[#761574]"/>
                </div>
            </div>
        </div>
    )
}

export default LearningPath