"use client"
import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import MovieCard from "../components/MovieCard"
import { SkeletonCard } from "@/components/SkeletonCard";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

export default function Home() {
  const { movies, loading, hasMore, setSearch, search } = useInfiniteScroll();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6  space-y-6">
      <div className="flex justify-between py-4 md:py-0">
        <h1 className="text-xl md:text-3xl font-bold mb-4">Popular Movies</h1>
        <div>
          <Link href="/favorite-movies">
              <div className="flex px-4 gap-4">
                <p>View Favorites</p>
                <MdFavoriteBorder className="h-6 w-6" />
              </div>
          </Link>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search movies..."
        className="w-full p-2 mb-6 rounded border border-gray-700 bg-gray-800"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
        :
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    }

      {!hasMore && (
        <div className="text-center py-4">
          <span>No more movies to load.</span>
        </div>
      )}
    </div>
  );
}
