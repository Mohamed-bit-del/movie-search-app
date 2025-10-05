import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getMovieDetails } from "../api/omdb"
import { Loader } from "../components/common/Loader"
import type { MovieDetails } from "../types/movie"

const MovieDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [details, setDetails] = useState<MovieDetails | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!id) return
        setLoading(true)
        getMovieDetails(id)
            .then((data) => {
                if (data !== undefined) {
                    setDetails(data);
                }
            })
            .catch(() => setError("Failed to fetch details. Please try again."))
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <Loader />
    if (error) return <div className="text-red-600 text-center mt-10">{error}</div>

    return (
        <div className="min-h-screen bg-[#212121] text-white px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="w-full md:w-1/3 flex justify-center">
                <img
                    src={details?.Poster !== "N/A" ? details?.Poster : "/no-image.png"}
                    alt={details?.Title}
                    className="w-[300px] h-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="w-full md:w-2/3">
                <h1 className="text-3xl font-bold mb-4">{details?.Title}</h1>
                <p className="text-gray-300 mb-3 italic">{details?.Genre}</p>

                <p className="text-lg mb-6 leading-relaxed">{details?.Plot}</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-400">
                    <div><span className="font-semibold text-white">Released:</span> {details?.Released}</div>
                    <div><span className="font-semibold text-white">Runtime:</span> {details?.Runtime}</div>
                    <div><span className="font-semibold text-white">IMDB Rating:</span> ⭐ {details?.imdbRating}</div>
                    <div><span className="font-semibold text-white">Director:</span> {details?.Director}</div>
                    <div><span className="font-semibold text-white">Actors:</span> {details?.Actors}</div>
                    <div><span className="font-semibold text-white">Language:</span> {details?.Language}</div>
                </div>

                <button
                    onClick={() => navigate(-1)}
                    className="mt-8 bg-blue-600 hover:bg-blue-700 transition-all px-5 py-2 rounded-xl text-white cursor-pointer"
                >
                    ← Back
                </button>
            </div>
        </div>
    )
}

export default MovieDetailsPage
