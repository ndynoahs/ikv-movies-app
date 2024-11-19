import Link from "next/link";
import React from "react";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Link key={movie.id} href={`/movie/${movie.id}`}>
      <div className="bg-gray-800 p-4 rounded shadow">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded mb-4"
        />
        <h2 className="text-lg font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-400">
          Release Date: {movie.release_date}
        </p>
        <p className="text-sm text-yellow-400">Rating: {movie.vote_average}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
