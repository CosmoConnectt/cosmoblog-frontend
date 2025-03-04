import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-start gap-6 flex-wrap" style={{ backgroundImage: 'url(/star1.jpg)', backgroundSize: 'cover' }}>
      {/* links */}
      <div className="flex flex-wrap items-center gap-4">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-2 py-1 text-sm"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=Space-News"
          className="text-white hover:text-green rounded-full px-2 py-1 text-sm"
        >
          Space News & Updates
        </Link>
        <Link
          to="/posts?cat=Astronomy-Basics"
          className="text-white hover:text-green rounded-full px-2 py-1 text-sm"
        >
          Astronomy Basics
        </Link>
        <Link
          to="/posts?cat=Stargazing-Tips"
          className="text-white hover:text-green rounded-full px-2 py-1 text-sm"
        >
          Stargazing Tips
        </Link>
        <Link
          to="/posts?cat=Cosmic-Events"
          className="text-white hover:text-green rounded-full px-2 py-1 text-sm"
        >
          Cosmic Events
        </Link>
        <Link
          to="/posts?cat=Space-Photography"
          className="text-white hover:text-green rounded-full px-2 py-1 text-sm"
        >
          Space Photography
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search />
    </div>
  );
};

export default MainCategories;
