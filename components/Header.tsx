import { FC } from "react";
import Link from "next/link";
import { HiOutlineReply } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";

interface HeaderProps {
  isFavorite: boolean;
  handleFavoriteToggle: () => void;
}

const Header: FC<HeaderProps> = ({ isFavorite, handleFavoriteToggle }) => {
  return (
    <header className="flex md:justify-between text-white py-4 md:px-6 items-center">
      <Link href="/">
        <button className="flex px-4 py-2 rounded gap-4">
          <HiOutlineReply className="h-6 w-6" />
          Go back
        </button>
      </Link>

      
      <div className="gap-4 hidden md:flex">
        {/* View Favorites Button */}
          <Link href="/favorite-movies">
            <div className="flex px-4 py-2 gap-4">
              <p>View Favorites</p>
              <MdFavoriteBorder className="h-6 w-6" />
            </div>
          </Link>

        {/* Add to Favorites Button */}
        <button
          onClick={handleFavoriteToggle}
          className={`px-4 py-2 rounded ${isFavorite
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
            }`}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </header>
  );
};

export default Header;
