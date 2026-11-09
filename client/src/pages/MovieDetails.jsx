import { ArrowLeft, CalendarDays, Clock3, StarIcon } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import { dummyShowsData } from "../assets/assets"
import BlurCircle from "../components/BlurCircle"
import timeFormat from "../lib/timeFormat"

const MovieDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = dummyShowsData.find((show) => show._id === id)

  if (!movie) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-28 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Movie not found</p>
        <h1 className="mt-3 text-3xl font-semibold">This movie is unavailable</h1>
        <p className="mt-2 max-w-md text-gray-400">
          It may have been removed or the link may be incorrect.
        </p>
        <button
          type="button"
          onClick={() => navigate("/movies")}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold transition hover:bg-primary-dull"
        >
          <ArrowLeft className="h-4 w-4" />
          Browse movies
        </button>
      </main>
    )
  }

  const releaseDate = movie.release_date
    ? new Date(`${movie.release_date}T00:00:00`)
    : null
  const releaseYear =
    releaseDate && !Number.isNaN(releaseDate.getTime())
      ? releaseDate.getFullYear()
      : null
  const formattedReleaseDate = releaseDate && !Number.isNaN(releaseDate.getTime())
    ? new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(releaseDate)
    : null
  const rating = Number(movie.vote_average)

  return (
    <main className="relative isolate min-h-screen overflow-hidden px-6 pb-20 pt-28 md:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[34rem]">
        <img
          src={movie.backdrop_path || movie.poster_path}
          alt=""
          className="h-full w-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/40 via-[#09090b]/75 to-[#09090b]" />
      </div>
      <BlurCircle top="160px" right="-90px" />

      <div className="relative mx-auto max-w-6xl">
        <button
          type="button"
          onClick={() => navigate("/movies")}
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-300 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          All movies
        </button>

        <section className="grid items-start gap-8 md:grid-cols-[minmax(220px,320px)_1fr] md:gap-12">
          <img
            src={movie.poster_path || movie.backdrop_path}
            alt={`${movie.title} poster`}
            className="mx-auto aspect-[2/3] w-full max-w-[320px] rounded-2xl object-cover shadow-2xl shadow-black/50 ring-1 ring-white/10"
          />

          <div className="relative flex flex-col items-start pt-1 md:pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              {movie.original_language?.toUpperCase() || "Movie"}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              {movie.title}
            </h1>
            {movie.tagline && <p className="mt-3 text-lg italic text-gray-300">{movie.tagline}</p>}

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-gray-300">
              {Number.isFinite(rating) && (
                <span className="inline-flex items-center gap-2">
                  <StarIcon className="h-4 w-4 fill-primary text-primary" />
                  <strong className="text-white">{rating.toFixed(1)}</strong>
                  <span>user rating</span>
                </span>
              )}
              {releaseYear && (
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  {releaseYear}
                </span>
              )}
              {Number.isFinite(Number(movie.runtime)) && Number(movie.runtime) > 0 && (
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-primary" />
                  {timeFormat(Number(movie.runtime))}
                </span>
              )}
            </div>

            {movie.genres?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id ?? genre.name}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <p className="mt-7 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              {movie.overview || "No synopsis is available for this movie yet."}
            </p>

            {formattedReleaseDate && (
              <p className="mt-5 text-sm text-gray-400">Released {formattedReleaseDate}</p>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default MovieDetails
