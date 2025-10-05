import { useEffect, useMemo, useState } from 'react';
import { MovieCard } from '../components/movies/MovieCard';
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom"
import { useDebounce } from '../hooks/useDebounce';
import { searchMovies } from '../api/omdb';
import { Loader } from '../components/common/Loader';
import type { MovieSummary } from '../types/movie';


function SearchPage() {
    const navigate = useNavigate()
    const { searchQuery } = useAppContext();
    const debouncedQuery = useDebounce(searchQuery, 800);

    const [results, setResults] = useState<MovieSummary[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!debouncedQuery.trim()) {
            setResults([]);
            setError(null);
            return;
        }

        const fetchMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await searchMovies(debouncedQuery);

                const searchResults = (data?.Search ?? []) as MovieSummary[];
                const uniqueResults: MovieSummary[] = Array.from(
                    new Map(searchResults.map((m) => [m.imdbID, m])).values()
                );
                setResults(uniqueResults)
                setError(data?.Error || "");
            } catch {
                console.error("Error fetching data:", error);
                setError("Error fetching data, Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [debouncedQuery]);

    const handleSelect = (id: string) => navigate(`/movie/${id}`)

    const memoizedResults = useMemo(() => results ?? [], [results]);

    return (
        <div className="min-h-screen bg-[#212121]">

            <main className="p-[10px]">
                {loading && <Loader />}
                {error && <p className="text-red-400 text-center mt-3">{error}</p>}

                {!loading && !error && memoizedResults.length === 0 && (
                    <h2 className="text-center mt-5 text-white flex items-center justify-center h-[90%]">search you Movie 🎬</h2>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                    {memoizedResults.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} onSelect={handleSelect} />
                    ))}
                </div>
            </main>
        </div>
    )
}

export default SearchPage;
