import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle'
import { dummyShowsData } from '../assets/assets'
import MovieCard from './MovieCard'

const FeatureSection = () => {
    const navigate = useNavigate()

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>

            <div className='relative flex items-center justify-between pt-20 pb-8'>
                <BlurCircle top='0' right='-80px' />
                <div className='flex items-center gap-2.5'>
                    <span className='w-2.5 h-2.5 rounded-full bg-primary animate-pulse'></span>
                    <h2 className='text-gray-200 font-semibold text-xl tracking-wide'>Now Showing</h2>
                </div>
                <button
                    onClick={() => navigate('/movies')}
                    className='group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition cursor-pointer font-medium'
                >
                    View All
                    <ArrowRight className='group-hover:translate-x-1 transition-transform w-4 h-4' />
                </button>
            </div>

            <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                {dummyShowsData.slice(0, 4).map((show) => (
                    <MovieCard key={show._id} movie={show} />
                ))}
            </div>

            <div className='flex justify-center mt-16 pb-4'>
                <button
                    onClick={() => {
                        navigate('/movies')
                        scrollTo(0, 0)
                    }}
                    className='px-8 py-3 text-sm bg-primary hover:bg-primary-dull active:scale-95 transition-all
                rounded-full font-medium cursor-pointer shadow-lg shadow-primary/20 hover:shadow-primary/30'
                >
                    Show more
                </button>
            </div>
        </div>
    )
}

export default FeatureSection
