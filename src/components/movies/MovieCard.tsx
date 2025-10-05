import React from 'react'
import type { MovieSummary } from '../../types/movie'


interface Props {
    movie: MovieSummary
    onSelect: (id: string) => void
}


export const MovieCard: React.FC<Props> = ({ movie, onSelect }) => {
    const poster = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : undefined;

    return (
        <div
            className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-md bg-white group"
            onClick={() => onSelect(movie.imdbID)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSelect(movie.imdbID)}
        >
            <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                {poster ? (
                    <img
                        src={poster}
                        alt={movie.Title}
                        className="object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="text-gray-400">No Image</div>
                )}
            </div>

            <div className="p-3">
                <h3 className="font-semibold text-lg truncate">{movie.Title}</h3>
                <p className="text-sm text-gray-600">{movie.Year}</p>
            </div>
        </div>
    )
}