import { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import BlurCircle from './BlurCircle'
import { PlayCircleIcon } from 'lucide-react'

const TrailersSection = () => {
    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'>
            <p className='text-gray-300 font-medium text-lg max-w-[960px] mx-auto'>Trailers</p>

            <div className='relative mt-6 mx-auto max-w-[960px]'>
                <BlurCircle top='-100px' right='-100px' />
                <a
                    href={currentTrailer.videoUrl}
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Watch trailer on YouTube'
                    className='relative block aspect-video w-full overflow-hidden rounded-lg bg-black'
                >
                    <img
                        src={currentTrailer.image}
                        alt='Selected movie trailer'
                        className='absolute inset-0 h-full w-full object-cover'
                    />
                    <span className='absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/10'>
                        <PlayCircleIcon className='h-16 w-16 text-white drop-shadow-lg' strokeWidth={1.5} />
                    </span>
                </a>
            </div>

            <div className='group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto'>
                {dummyTrailers.map((trailer, index) => (
                    <button
                        key={trailer.image}
                        type='button'
                        aria-label={`Show trailer ${index + 1}`}
                        onClick={() => setCurrentTrailer(trailer)}
                        className='relative aspect-video overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 group-hover:not-hover:opacity-50'
                    >
                        <img src={trailer.image} alt='' className='h-full w-full object-cover brightness-75' />
                        <PlayCircleIcon
                            strokeWidth={1.6}
                            className='absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-white'
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default TrailersSection
