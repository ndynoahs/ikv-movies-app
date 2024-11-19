import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

interface Movie {
  id: number;
  title: string;  // Add other movie properties here
  poster_path: string ;
  release_date: string;
  vote_average: number;
}

const useInfiniteScroll = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&page=${page}&language=en-US`
      );
      const newMovies = response.data.results;
      
      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
      setHasMore(newMovies.length > 0);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
      !loading &&
      hasMore
    ) {
      fetchMovies();
    }
  }, [fetchMovies, loading, hasMore]);

  useEffect(() => {
    // Initial fetch
    fetchMovies();
  }, []); // Empty dependency array for initial fetch only

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]); // Add handleScroll as dependency

  return {
    movies: filteredMovies,
    loading,
    hasMore,
    setSearch,
    search
  };
};

export default useInfiniteScroll;