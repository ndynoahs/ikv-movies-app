"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineReply } from "react-icons/hi";

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export default function FavoriteMovies() {
  const [favoriteMovies, setFavoriteMovies] = useState<MovieDetails[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
    setFavoriteMovies(savedFavorites);
  }, []);

  const removeFromFavorites = (id: number) => {
    const updatedFavorites = favoriteMovies.filter((movie) => movie.id !== id);
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    setFavoriteMovies(updatedFavorites);
    };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex md:justify-between text-white py-4 md:px-6 items-center">
        <Link href="/">
          <button className="flex px-4 py-2 rounded gap-4">
            <HiOutlineReply className="h-6 w-6" />
            Go back
          </button>
        </Link>      
      </div>      
      <div className="flex  flex-col justify-center items-center ">
        <div className="w-[90%] pt-10">

          <h1 className="text-3xl font-bold mb-4">Favorite Movies</h1>
          {favoriteMovies.length === 0 ? (
            <div className="flex  flex-col justify-center items-center  h-[60vh]">
            <p className="text-gray-400">No favorite movies found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favoriteMovies.map((movie) => (
                <Link key={movie.id} href={`/movie/${movie.id}`}>
                  <div key={movie.id} className="flex flex-col items-center py-6">
                    <Image
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full md:w-2/3 rounded"
                      width={900}
                      height={600}
                    />
                    <p className="text-gray-400 text-center text-sm">{movie.title}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault(); // Prevent any default navigation
                        removeFromFavorites(movie.id);
                      }}
                      className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                    >
                      Remove
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
