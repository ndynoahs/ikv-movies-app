"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { useParams } from 'next/navigation';

interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  genres: { id: number; name: string }[];
}

interface CastMember {
  id: number;
  name: string;
  profile_path: string | null;
}

interface CastResponse {
  cast: CastMember[];
}



export default function MoviePage() {
  const params = useParams();
  const { id } = params; 
  // Movie state
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      const [movieResponse, castResponse] = await Promise.all([
        axios.get<MovieDetails>(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&language=en-US`
        ),
        axios.get<CastResponse>(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_API_KEY}&language=en-US`
        ),
      ]);

      setMovie(movieResponse.data);
      setCast(castResponse.data.cast.slice(0, 10)); // Show only top 10 cast members

      // Check if the movie is in favorites
      const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");
      const movieInFavorites = favoriteMovies.some((movie: MovieDetails) => movie.id === parseInt(String(id)));
      setIsFavorite(movieInFavorites);
    };

    fetchMovieData();
  }, [id]);

  const handleFavoriteToggle = () => {
    const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");

    if (isFavorite) {
      // Remove movie from favorites
      const updatedFavorites = favoriteMovies.filter((movie: MovieDetails) => movie.id !== parseInt(String(id)));
      localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Add movie to favorites
      if (movie) {
        favoriteMovies.push(movie);
        localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
        setIsFavorite(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header isFavorite={isFavorite} handleFavoriteToggle={handleFavoriteToggle} />   

      {movie ?    
        <div className="max-w-4xl mx-auto flex flex-col  gap-8 pt-[2rem] md:pt-[4rem]">
          {/* Poster Image */}
          <div className="flex flex-col">
              <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full md:w-1/3 rounded"
              width={900}
              height={600} // Adjust width and height based on your needs
              />
              <div className="flex flex-col gap-4 py-10 md:hidden">
              {/* View Favorites Button */}
              <Link href="/favorite-movies">
              <p className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 text-center">
                  View Favorites
              </p>
              </Link>

              {/* Add to Favorites Button */}
              <button
              onClick={handleFavoriteToggle}
              className={`px-4 py-2 rounded ${
                  isFavorite
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
              >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </button>
              </div>

          </div>
          {/* Movie Details */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <p className="text-lg text-gray-300 mb-6">{movie.overview}</p>

            {/* Genres */}
            <h2 className="text-xl font-semibold mb-2">Genres:</h2>
            <ul className="mb-6">
              {movie.genres.map((genre) => (
                <li key={genre.id} className="text-gray-400">
                  {genre.name}
                </li>
              ))}
            </ul>

            {/* Cast */}
            <h2 className="text-xl font-semibold mb-2">Cast:</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {cast.map((actor) => (
                <div key={actor.id} className="flex flex-col items-center">
                  <Image
                    src={
                      actor.profile_path
                        ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                        : "https://via.placeholder.com/200x300?text=No+Image"
                    }
                    alt={actor.name}
                    className="w-full h-36 object-cover rounded mb-2 sm:h-44 md:h-48 lg:h-56"
                    width={900}
                    height={600}
                  />
                  <p className="text-gray-400 text-center text-sm">{actor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        : 
        <div className="max-w-4xl mx-auto flex flex-col gap-8 pt-[4rem]">
          <div className="animate-pulse">
            <div className="w-[35%] h-96 bg-gray-600 rounded-md"></div>
            <div className="mt-4 h-6 bg-gray-600 rounded-md w-full"></div>
            <div className="mt-4 h-6 bg-gray-600 rounded-md w-full"></div>
            <div className="mt-2 h-6 bg-gray-600 rounded-md w-1/2"></div>
            <div className="mt-2 h-6 bg-gray-600 rounded-md w-1/5"></div>

          </div>
        </div>
      }

    </div>
  );
}
