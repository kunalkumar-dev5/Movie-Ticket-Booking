import { StarIcon, Ticket } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeFormat'

const MovieCard = ({ movie }) => {
    const navigate = useNavigate()
    const rating = Number(movie.vote_average)
    const releaseDate = movie.release_date ? new Date(`${movie.release_date}T00:00:00`) : null
    const releaseYear = releaseDate && !Number.isNaN(releaseDate.getTime())
        ? releaseDate.getFullYear()
        : 'Coming soon'
    const runtime = Number(movie.runtime)

    const handleNavigate = () => {
        navigate(`/movies/${movie._id}`)
        scrollTo(0, 0)
    }

    return (
        <article className='group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900 to-gray-950 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10'>
            <button
                type='button'
                onClick={handleNavigate}
                aria-label={`View ${movie.title} details`}
                className='relative block w-full overflow-hidden bg-gray-800'
            >
                <img
                    src={movie.poster_path || movie.backdrop_path}
                    alt={`${movie.title} poster`}
                    loading='lazy'
                    className='aspect-[2/3] w-full object-cover transition duration-500 ease-out group-hover:scale-105'
                />
                <span className='absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent' />
                {movie.original_language && (
                    <span className='absolute left-3 top-3 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md'>
                        {movie.original_language}
                    </span>
                )}
            </button>

            <div className='flex flex-1 flex-col p-4'>
                <h3 className='line-clamp-2 min-h-12 text-base font-semibold leading-6 text-white transition-colors group-hover:text-primary' title={movie.title}>
                    {movie.title}
                </h3>

                <div className='mt-2 flex min-h-10 flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-400'>
                    <span>{releaseYear}</span>
                    {movie.genres?.length > 0 && (
                        <>
                            <span aria-hidden='true' className='text-gray-600'>•</span>
                            <span className='line-clamp-1'>{movie.genres.slice(0, 2).map((genre) => genre.name).join(' · ')}</span>
                        </>
                    )}
                    {Number.isFinite(runtime) && runtime > 0 && (
                        <>
                            <span aria-hidden='true' className='text-gray-600'>•</span>
                            <span>{timeFormat(runtime)}</span>
                        </>
                    )}
                </div>

                <div className='mt-auto flex items-center justify-between gap-2 border-t border-white/10 pt-4'>
                    <button
                        type='button'
                        onClick={handleNavigate}
                        className='inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary-dull active:scale-95'
                    >
                        <Ticket className='h-3.5 w-3.5' />
                        <span>View details</span>
                    </button>

                    <div className='flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300'>
                        <StarIcon className='h-3.5 w-3.5 fill-primary text-primary' />
                        <span className='font-semibold text-white'>
                            {Number.isFinite(rating) ? rating.toFixed(1) : 'N/A'}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default MovieCard
