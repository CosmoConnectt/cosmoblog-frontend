import { useState } from "react";
import { Link } from "react-router-dom";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4 flex flex-col gap-4 bg-light-gray">
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="w-1/2">
          <h1 className="text-blue-800 text-2xl md:text-5xl lg:text-4xl font-bold">
            Explore the Wonders of the Universe with CosmoConnect
          </h1>
        </div>
        {/* description */}
        <div className="w-1/2">
          <p className="mt-8 text-md md:text-xl">
            Your gateway to all things space – dive into fascinating articles,{" "}
            <br />
            connect with fellow space enthusiasts and Discover the cosmos like
            never before!
          </p>
        </div>
      </div>

      <h1 className="mb-8 text-2xl font-bold">BLOG: </h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
      <Link to="/write" className="fixed bottom-8 right-6">
        <button className="relative w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="50"
            height="50"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default PostListPage;