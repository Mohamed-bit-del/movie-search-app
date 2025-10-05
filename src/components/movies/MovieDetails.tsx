import React from 'react'
import type { MovieDetails as MovieDetailsType } from '../../types/movie'


interface Props {
    movie: MovieDetailsType | null
    onBack: () => void
}


export const MovieDetails: React.FC<Props> = ({ movie, onBack }) => {
    if (!movie) return null
    const poster = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : undefined
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <button onClick={onBack} className="text-blue-600 mb-4">&larr; Back to results</button>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                    {poster ? (
                        <img src={poster} alt={movie.Title} className="w-full rounded" />
                    ) : (
                        <div className="w-full h-80 bg-gray-100 flex items-center justify-center">No Image</div>
                    )}
                </div>
                <div className="md:flex-1">
                    <h2 className="text-2xl font-bold">{movie.Title} <span className="text-gray-500">({movie.Year})</span></h2>
                    <p className="mt-2 text-sm text-gray-700">{movie.Genre ?? 'Genre not available'}</p>
                    <p className="mt-4 text-gray-800">{movie.Plot ?? 'Plot not available'}</p>
                    <div className="mt-4 text-sm text-gray-600">
                        <p><strong>Director:</strong> {movie.Director ?? 'N/A'}</p>
                        <p><strong>Actors:</strong> {movie.Actors ?? 'N/A'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}