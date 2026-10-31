import { StarIcon, Ticket } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeFormat'

const MovieCard = ({ movie }) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/movies/${movie._id}`)
        scrollTo(0, 0)
    }

    return (
        <div className='group relative flex flex-col justify-between p-3.5 bg-gray-900/70 hover:bg-gray-900 border border-gray-800/80 hover:border-gray-700/80 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 w-full'>

            {/* Poster / Backdrop Image Container */}
            <div
                onClick={handleNavigate}
                className='relative w-full h-52 overflow-hidden rounded-xl cursor-pointer bg-gray-800/50'
            >
                <img
                    src={movie.backdrop_path}
                    alt={movie.title}
                    className='w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out'
                />

                {/* Subtle dark gradient overlay for depth */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity' />

                {/* Language Badge */}
                {movie.original_language && (
                    <span className='absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider text-gray-200 border border-white/10 shadow-sm'>
                        {movie.original_language}
                    </span>
                )}
            </div>

            {/* Movie Info */}
            <div className='flex flex-col flex-grow pt-3 pb-1'>
                <h3
                    onClick={handleNavigate}
                    className='font-semibold text-base text-gray-100 group-hover:text-primary transition-colors duration-200 truncate cursor-pointer'
                    title={movie.title}
                >
                    {movie.title}
                </h3>

                <p className='text-xs text-gray-400 mt-1.5 flex items-center gap-1.5 flex-wrap'>
                    <span>{new Date(movie.release_date).getFullYear()}</span>
                    <span className='text-gray-600'>•</span>
                    <span className='truncate max-w-[130px]'>
                        {movie.genres?.slice(0, 2).map((genre) => genre.name).join(' | ')}
                    </span>
                    <span className='text-gray-600'>•</span>
                    <span>{timeFormat(movie.runtime)}</span>
                </p>
            </div>

            {/* Action Bar */}
            <div className='flex items-center justify-between pt-3 mt-auto border-t border-gray-800/60'>
                <button
                    onClick={handleNavigate}
                    className='flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-primary hover:bg-primary-dull active:scale-95 transition-all duration-200 rounded-full cursor-pointer text-white shadow-sm shadow-primary/25 hover:shadow-primary/40'
                >
                    <Ticket className='w-3.5 h-3.5' />
                    <span>Buy Tickets</span>
                </button>

                <div className='flex items-center gap-1 text-xs text-gray-300 bg-gray-800/60 px-2.5 py-1.5 rounded-full border border-gray-700/40'>
                    <StarIcon className='w-3.5 h-3.5 text-primary fill-primary' />
                    <span className='font-semibold text-gray-100'>
                        {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
